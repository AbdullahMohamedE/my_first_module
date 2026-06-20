/*
avg function 
input: nums[] ..nums 
- sum all numbers 
- devide sum on nums.length
- return result
 */
function avg(...nums) {
    let result = 0;
    for (let i =0 ; i<nums.length; i++) {
        result += nums[i]; 
    } 
    result = result / nums.length;
    return result;
}
exports.avg = avg;


/**
set union 
inputs: 2 arrays 
- copy first array to the union array
- copy elements from array 2 without repeatition 
 */

function unionTwoSets(first_set, second_set) {
    let result = []; 
    for (let i = 0; i < first_set.length; i++) {
        result.push(first_set[i]); 
    }

    for (let i =0; i<second_set.length; i++) {
        if ( result.includes(second_set[i]) ) { 
            continue; 
        }
        result.push(second_set[i]);

    }
    return result; 
}
exports.unionTwoSets = unionTwoSets;


/**
set intersection 
for each item in first_set:
 - if item included in second_set {
    push it to result
 }
 */
exports.intersection = function(first_set, second_set) {
    let result = []; 
    for (let i=0; i < first_set.length; i++) {
        if (second_set.includes(first_set[i]))
            {result.push(first_set[i]);}
        
    }
    return result
}


/*
sets diffrence
inputs: two sets
steps: 
- create result
- for each item in first_set
    - if item is not in set 2
        - push it to result
- return result
*/

exports.difference = function(first_set, second_set) {
    let result = []; 
    for (let i = 0; i < first_set.length; i++) {
        if (!second_set.includes(first_set[i])) 
            result.push(first_set[i]);
    }
    return result;
}


/*
find max num
steps: 
- temp variable max = the smallest number value
- for each item nums
- if item > max then max = item
return max
*/
module.exports.max = function max(...nums) {
    // max => smallest number possible
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}


/**
find min num
steps: 
- temp variable min = the greatest number value
- for each item nums
- if item < min then min = item
return min
 */
exports.min = function min(...nums) {
    // max => greatest number possible
    let min = Number.POSITIVE_INFINITY;
    for(let i =0; i < nums.length; i++) {
        if(nums[i] < min)
            min = nums[i];
    }
    return min;
}