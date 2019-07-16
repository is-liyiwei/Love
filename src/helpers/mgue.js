/*!
 * mgue.js v0.2.0
 * (c) 2018-2018 is-liyiwei
 * Released under the MIT License.
 * https://github.com/is-liyiwei/mgue
 */

const LIFECYCLE_HOOKS = [
  'create',
  'compressImg',
  'drawStart',
  'drawEnd',
  'uploadStart',
  'done',
  'fail'
]

const class2type = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Object]': 'object',
  '[object Error]': 'error'
}

const checkTypeForImage = /\.*(gif|jpg|jpeg|bmp|png)$/i

// const mimes = {
//   'jpg': 'image/jpeg',
//   'jpeg': 'image/jpeg',
//   'png': 'image/png',
//   'gif': 'image/gif'
//   'svg': 'image/svg+xml'
//   'psd': 'image/photoshop'
// }

const checkType = (obj) => {
  return class2type[toString.call(obj)]
}

const getMime = (b64) => {
  return b64.split(',')[0].split(':')[1].split(';')[0]
}

/**
 * dataURL to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI,图片的base64格式数据
 * @returns {Blob}
 */
const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(',')[1])
  const mimeString = getMime(dataURI)
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: mimeString })
}

const compressImgForCanvas = (img, mgue, opts) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const scale = img.width / img.height
  const width1 = img.width
  const height1 = parseInt(width1 / scale)

  canvas.width = width1
  canvas.height = height1

  ctx.drawImage(img, 0, 0, width1, height1)

  mgue.ctx = ctx
  mgue.img = img
  mgue.canvas = canvas

  mgue['drawStart'] && mgue['drawStart'].call(mgue) // eslint-disable-line
  // 将原来图片的质量压缩到原先的coefficient倍。data url的形式
  const data = canvas.toDataURL(opts.fileMime, opts.coefficient)

  mgue['drawEnd'] && mgue['drawEnd'].call(mgue) // eslint-disable-line

  return data
}

const _canCompress = (fileMime) => {
  // gif暂时未找到合理绘图方法，暂用此方法跳过

  const flag = ['image/gif'].indexOf(fileMime) !== -1

  return flag
}

class mgue {
  static use(plugin, opts) {
    if (plugin.installed) {
      console.info('plugin installed') // eslint-disable-line
      return
    }
    plugin.install(this, opts)
    plugin.installed = true
  }
  constructor(options) {
    this.$mgue = this
    this._options = options
    this.init()
  }
  init() {
    const mgue = this
    // 超过2048kb则会压缩，默认值是2048，可手动定义
    // 压缩系数，默认是0.8，可选范围是0-1的数字类型的值，可手动定义
    const defaultOptions = {
      size: 2048,
      coefficient: 0.8
    }
    mgue.$data = Object.assign({}, defaultOptions, this._options.data)
    mgue.url = mgue._options.data.url
    mgue.$ref = document.getElementById(mgue._options.el.slice(1))
    mgue.blobList = []
    mgue._initHook()
    mgue._bindHandleDefault(mgue)
    mgue['create'] && mgue['create'].call(null)
  }
  _initHook() {
    const o = this._options
    for (const hook of LIFECYCLE_HOOKS) {
      if (checkType(o[hook]) === 'function') {
        this[hook] = o[hook]
      } else if (o[hook]) {
        throw new Error('hook must use function')
      }
    }
  }
  _bindHandleDefault(mgue) {
    this.$ref.onchange = function(e) {
      mgue.fileList = this.files
      mgue.update()
    }
  }
  update() {
    const mgue = this
    mgue.warn = false
    const compressSize = mgue.$data.size
    const coefficient = mgue.$data.coefficient
    const blobList = mgue.blobList = []

    const files = Array.prototype.slice.call(mgue.fileList)

    files.forEach(function(file) {
      if (!checkTypeForImage.test(file.type)) {
        // 检查是否是图片类型
        console.warn('warn: Must be the image type') // eslint-disable-line
        return mgue.warn = true  // eslint-disable-line
      } else {
        // 设置图片类型
        file.fileMime = file.type.match(checkTypeForImage)['input']
      }

      // 获取图片压缩前大小，打印图片压缩前大小
      // let size = ~~(file.size / 1024) + 'KB'
      const size = ~~(file.size / 1024)

      const reader = new FileReader()

      reader.readAsDataURL(file)
      // 设置一个flag，gif暂时无法绘图
      file.is_gif_flag = _canCompress(file.fileMime)

      reader.onload = (evt) => {
        const img = new Image()
        img.src = evt.srcElement.result
        img.onload = () => {
          // 当图片大小不超过这个的时候或者为gif图，跳过canvas，直接上传
          if (size < compressSize || file.is_gif_flag) {
            // 小于这个尺寸，但是有绘图需求进入canvas，但不能是gif图
            if (!file.is_gif_flag && mgue['drawStart'] !== undefined || mgue['drawEnd'] !== undefined) {
              const imgBase64 = compressImgForCanvas(img, mgue, {
                fileMime: file.fileMime,
                coefficient,
                size,
                compressSize
              })

              blobList.push(dataURItoBlob(imgBase64))

              if (blobList.length === files.length) {
                mgue['compressImg'] && mgue['compressImg'].call(this, mgue.blobList)
              }
            } else {
              blobList.push(dataURItoBlob(evt.srcElement.result))
              // 将压缩后的二进制图片数据对象(blob)组成的list通过钩子函数返回出去
              if (blobList.length === files.length) {
                mgue['compressImg'] && mgue['compressImg'].call(this, mgue.blobList)
              }
            }
          } else {
            const imgBase64 = compressImgForCanvas(img, mgue, {
              fileMime: file.fileMime,
              coefficient,
              size,
              compressSize
            })
            // 打印压缩前后的大小，以及压缩比率
            // console.log('压缩前：' + evt.srcElement.result.length)
            // console.log('压缩后：' + imgBase64.length)
            // console.log('压缩率：' + ~~(100 * (evt.srcElement.result.length - imgBase64.length) / evt.srcElement.result.length) + '%')
            // console.log('base64数据', imgBase64)
            blobList.push(dataURItoBlob(imgBase64))

            // 将压缩后的二进制图片数据对象(blob)组成的list通过钩子函数返回出去
            if (blobList.length === files.length) {
              mgue['compressImg'] && mgue['compressImg'].call(this, mgue.blobList)
            }
          }
        }
      }
    })
  }
  // markHook (hook) {
  //   this[hook].apply(this)
  // }
  send() {
    const mg = this

    mg['uploadStart'] && mg['uploadStart'].call(null, mg.warn)

    if (mg.warn) {
      return mg['fail'] && mg['fail'].call(null, mg.warn)
    }

    for (let i = 0; i < mg.blobList.length; i++) {
      formUpData(mg, mg.blobList[i])
    }

    function formUpData(mgue, blobFile) {
      const formData = new FormData()
      const xhr = new XMLHttpRequest()

      const { headers, params } = mgue.$data.headers
      // 这里可以给mgue实例添加一个uid作为缓存，下个版本试试

      // 添加其他参数
      if (checkType(params) === 'object' && params) {
        Object.keys(params).forEach((k) => {
          formData.append(k, params[k])
        })
      }

      xhr.open('POST', mg.url)

      // 设置header
      if (checkType(headers) === 'object' && headers) {
        Object.keys(headers).forEach((k) => {
          xhr.setRequestHeader(k, headers[k])
        })
      }

      // imgFiles, image
      formData.append('imgFiles', blobFile)

      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            mg['done'] && mg['done'].call(null, this.response, e)
          } else {
            mg['fail'] && mg['fail'].call(null, this.response, e)
          }
        }
      }

      xhr.send(formData)
    }
  }
}

export default mgue
