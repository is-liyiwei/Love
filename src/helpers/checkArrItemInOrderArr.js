// const arr1 = ['1', '2', '3', '8']

// const arr2 = ['1', '2', '3', '7']

// checkArrItemInOrderArr(arr1, arr2)

const checkArrItemInOrderArr = (arr1, arr2) => {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i].toString() === arr2[j].toString()) {
        result.push(arr1[i])
      }
    }
  }
  return result
}

export default checkArrItemInOrderArr
