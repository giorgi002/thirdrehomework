// first task 👇
// function divideByFIve(numbers){
//     return numbers.findIndex(num => num % 5 == 0)
// }
// const numbers = [3, 6, 10, 12];
// console.log(divideByFIve(numbers));



// second task 👇
// function filterNegatives(number){
//     return number.flat().filter(num=> num > 0)
// }
// const numbers =  [[1, -2], [3, -4], [5]];
// console.log(filterNegatives(numbers));


// third task 👇
// function filterNonArray(string){
//     return string.some(Array.isArray)
// }
// const box = [1, [2, 3], "hello", [4]];
// console.log(filterNonArray(box));


// fourth task 👇
// function findSum(numbers){
//     return numbers.flat().reduce((sum, item) => sum + item);
// }
// const numbers = [[2, 4], [6, 8]];
// console.log(findSum(numbers));


// fifth task 👇
// function findSumOfSquares(number){
//     return number.flat().map(nums => nums **2).reduce((sum,item) => sum +item)
// }
// const numbers = [[2, 4], [6, 8]];
// console.log(findSumOfSquares(numbers));


// sixth task 👇
// const characters = [
//     {
//       name: "Luke Skywalker",
//       height: "172",
//       mass: "77",
//       eye_color: "blue",
//       gender: "male",
//     },
//     {
//       name: "Darth Vader",
//       height: "202",
//       mass: "136",
//       eye_color: "yellow",
//       gender: "male",
//     },
//     {
//       name: "Leia Organa",
//       height: "150",
//       mass: "49",
//       eye_color: "brown",
//       gender: "female",
//     },
//     {
//       name: "Anakin Skywalker",
//       height: "188",
//       mass: "84",
//       eye_color: "blue",
//       gender: "male",
//     },
// ];
// const eyeColorCount = characters.reduce((acc, item) =>{
//     const color = item.eye_color;
