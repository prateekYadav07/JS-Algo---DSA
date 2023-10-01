function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    if(!str)
        return 0

    let tempS = ''
    let obj ={}
    let i = 0
    // for(let i=0; i<str.length; i++){
    while(i<str.length){
        //check if ch at i is in tempS, if true then 
        //add tempS as key and its length as pair
        if(tempS.includes(str[i])){
            obj[tempS] = tempS.length
            str = str.slice(tempS.indexOf(str[i]) + 1)
            i = 0
            tempS = ''
        }
        tempS += str[i]
        i++
        console.log(tempS,i)
    }
    obj[tempS] = tempS.length
    console.log(obj)
    let max = Object.values(obj).reduce((total, x) => {
        total = total > x ? total : x
        return total
    },0)
    
    return max
}

findLongestSubstring('longestsubstring') 


// SOLUTIONS PART 3
// maxSubArray Solution

    function maxSubarraySum(arr, num){
        if (arr.length < num) return null;
     
        let total = 0;
        for (let i=0; i<num; i++){
           total += arr[i];
        }
        let currentTotal = total;
        for (let i = num; i < arr.length; i++) {
           currentTotal += arr[i] - arr[i-num];
           total = Math.max(total, currentTotal);
        }
        return total;
    }

// minSubArrayLen Solution

    function minSubArrayLen(nums, sum) {
      let total = 0;
      let start = 0;
      let end = 0;
      let minLen = Infinity;
     
      while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
    		// move the window to right
        if(total < sum && end < nums.length){
          total += nums[end];
    			end++;
        }
        // if current window adds up to at least the sum given then
    		// we can shrink the window 
        else if(total >= sum){
          minLen = Math.min(minLen, end-start);
    			total -= nums[start];
    			start++;
        } 
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
          break;
        }
      }
     
      return minLen === Infinity ? 0 : minLen;
    }

// findLongestSubstring Solution

    function findLongestSubstring(str) {
      let longest = 0;
      let seen = {};
      let start = 0;
     
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
          start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1; 
      }
      return longest;
    }