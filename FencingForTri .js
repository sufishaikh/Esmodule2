const FencingForTri=(h,b,a,numofwire,costperfoot) => {
const parimeter = h + b + a ;
const totalcost= parimeter * numofwire * costperfoot
return totalcost


}
console.log(`Total cost for Fencing is Rs. ${FencingForTri(10,12,18,5,10)}`) // perimeter*numofwire*cost