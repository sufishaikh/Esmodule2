function BiggerNum(num1,num2){
    if(num1>num2){
        return num1;
        
    }else{
        return num2;
    }
}
console.log(`Bigger number is ${ BiggerNum(13,50)}`);
console.log(`Bigger number is ${ BiggerNum(123,500)}`);
console.log(`Bigger number is ${ BiggerNum(12388,75500)}`);
console.log(`Bigger number is ${ BiggerNum(789123,25500)}`);