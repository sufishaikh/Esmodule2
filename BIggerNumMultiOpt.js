// const BiggerNumMultiOpt=(num1,num2,num3,num4,num5,num6,num7,num8)=>{
//     let BigNum=0;
//     BigNum = (num1>num2) ? num1 : num2;

//     BigNum = (BigNum>num3) ? BigNum : num3;

//     BigNum = (BigNum>num4) ? BigNum : num4;

//     return BigNum

  


// }
// console.log(`Bigger Number is ${BiggerNumMultiOpt(23,156,76,21)}`)

const BiggerNumMultiOpt=(num1,num2,num3,num4,num5,num6,num7,num8)=>{
    Math.max(num1,num2,num3,num4,num5,num6,num7,num8);
}
console.log(Math.max(23,156,76,21,150,456,753,147))

