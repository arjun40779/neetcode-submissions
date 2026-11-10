class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen=new Map();

        for(let i=0;i<nums.length;i++){
            const value=nums[i];
            
            if(seen.has(target-value)){
                return [seen.get(target-value),i];
            }else{
                seen.set(value,i);
            }
        }
    }
}
