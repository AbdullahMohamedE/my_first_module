// Runing our function and doing some simple unit testing to them

// first importing our module
let ourMath = require("./index"); 

let avg = ourMath.avg(1,2,3,4,5);
console.log("Avg: " + avg);
if (avg === 3) {
    console.log("avg works:)");
} else {
    console.log("avg failed:(");
}

console.log("--------------------");

// union 
let union = ourMath.unionTwoSets([10,20,30,] , [20,50,30,80]);
console.log("Union: " + union);
if (
    union[0] === 10 && 
    union[1] === 20 && 
    union[2] === 30 && 
    union[3] === 50 && 
    union[4] === 80)
    {console.log("Union Works:)");
    }else {
        console.log("Union failed:(");
    }

console.log("--------------------");

// intersection
let intersection = ourMath.intersection([2,3,4,5], [2,3,7]);

console.log("Intersection: " + intersection);

if (
    intersection[0] === 2 &&
    intersection[1] === 3 &&
    intersection.length === 2
) {
    console.log("Intersection works :)");
} else {
    console.log("Intersection failed :(");
}




console.log("--------------------");

// difference
let difference = ourMath.difference([1,2,3,4], [3,4,5]);

console.log("Difference: " + difference);

if (
    difference[0] === 1 &&
    difference[1] === 2 &&
    difference.length === 2
) {
    console.log("Difference works :)");
} else {
    console.log("Difference failed :(");
}

console.log("--------------------");

// max 
let max = ourMath.max(12,435,76,234,75);
console.log("Max: " + max);
    if(max === 435) {
        console.log("max works:)");
    } else 
        console.log("max filed:(");

// min
let min_Value = ourMath.min(43, 59, 500, -10);

console.log("--------------------");

console.log("Min: " + min_Value);

if (min_Value === -10) {
    console.log("Min works :)");
} else {
    console.log("Min failed :(");
}