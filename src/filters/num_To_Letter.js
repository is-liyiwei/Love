
// console.log(num_To_Letter(1)) => A
// console.log(num_To_Letter(2)) => B

const num_To_Letter = (num) => {
  return String.fromCharCode(64 + parseInt(num))
}

export default num_To_Letter
