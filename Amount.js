const MillageCost = (distance,milage,Fuelprice) =>  // How To Get Round Figure Amt
    Math.ceil(distance/milage)*Fuelprice;


    console.log (`Amount Need To Fill Fuel is ${MillageCost(303,37,110.08)}`)
    console.log(Math.round( 901.4659459459459))

    console.log( Math.ceil(12.02))