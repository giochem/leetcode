function twoSum(numbers, target) {
  let hashNum = { [numbers[0]]: 0 }

  for (let i = 1; i <= numbers.length - 1; i++) {
    if (hashNum[String(target - numbers[i])] !== undefined) {
      return [hashNum[target - numbers[i]], i]
    }
    hashNum[String(numbers[i])] = i
  }
}
console.time("doSomething")
twoSum([2, 7, 11, 15], 9)
console.timeEnd("doSomething")
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3, 3], 6))
