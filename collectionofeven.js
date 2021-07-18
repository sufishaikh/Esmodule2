const CollectionOfEven=(numbers)=>{
    let sumEven=0;
    let sumOdd=0;
    numbers.forEach(element => {
    // element% 2==0 ? ( sum = sum + element )
    // element% 2==0 && ( sum = sum + element )
    
element % 2 == 0
? (sumEven = sumEven + element)
: (sumOdd = sumOdd + element)   //for both answer total
    });
    // return sum;
    return`Sum Of Even Numbers=${sumEven} and
    Sum Of Odd Numbers=${sumOdd}`;
};
console.log(CollectionOfEven([5,2,7,9,10,8,17,115,10]));
