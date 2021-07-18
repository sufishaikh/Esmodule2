// const findSquare=(Num)=>{
//     let square =[];
//     Num.forEach(element =>
//         square.push(element**2));
//     return square;

// }
// console.log(findSquare([5,2,7,,9,10]))

const squareOfArrayopt=(numbers)=> numbers.map((element) => element**2);

console.log(squareOfArrayopt([4,7,9,10,11,15]));