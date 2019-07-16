/**
 *  arr: [{
      value: '1'
    }, {
      value: '2'
    }, {
      value: '3'
    }]

    return ['1', '2', '3']
 */

const extractByKey = (arr, key = 'value') => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }
  return result
}

export default extractByKey
