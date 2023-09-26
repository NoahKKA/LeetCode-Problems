var rotate = function(nums,k){
    //special case | nothing to shift
    if (nums <= 1){
        return nums;
    }

    //takes lastelement and moves it to front
    for(let i = 0; i < k; i++){
        let lastElement = nums.pop()
        nums.unshift(lastElement)
    }
    return nums    
}

console.log(rotate([1,2,3,4,5,6,7], 3))