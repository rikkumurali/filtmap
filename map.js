const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)

// console.log(newArr);

const newArr = numbers.map((item) => {
      console.log(item)
      item++
      return item
})

console.log(newArr)