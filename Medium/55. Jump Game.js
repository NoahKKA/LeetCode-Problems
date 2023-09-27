var canJump = function(nums) {
    let current = nums[0];
    let end = nums.length;

    for (let i = 1; i < end; i++) {
        if (current >= end - 1) {
            return true
        } else if (current === 0) {
            return false
        } else {
            current = Math.max(current - 1, nums[i]);
        }
    }

    return true;
};

console.log(canJump([3,2,1,0,4]))