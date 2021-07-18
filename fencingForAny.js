const fencingForAny = (edges, numofwire, rate) => {     //let=muteble//const=immuteble
    let sum = 0;
    for (let i = 0; i < edges.length; i++) {
        sum = sum + edges[i]; //For() is working on looping+


        //    console.log(`i=${i}value=${edges[i]}`);

    }
    return sum * numofwire * rate;
} // Formula For Collection\
console.log(`Cost For Fencing is Rs.${fencingForAny([30,20,30,20,52,75,88], 5,10)}/-`)


//2 for (let i = 0; i < edges.length; i=+i+2)  for direct jump on 2 no
