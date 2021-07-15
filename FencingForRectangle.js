const FencingForRect=(b,w,numofwire,costperfoot) => {
const parimeter = b + w + b + w
const totalcost= parimeter * numofwire * costperfoot
return totalcost


}
console.log(`Total cost for Fencing is ${FencingForRect(20,30,5,10)}`) // perimeter*numofwire*cost