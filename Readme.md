# JavaScript Algo and DSA

## Section 1: Big O Notation

### Lecture 1:

so to classify our programs as great, pretty good, just ok, ehhh, awful in more mathematical way then we use Big-O Notation

### Lecture 2:

sum of numbers upto n in different ways:

```
function addUpTo(n){
    let total = 0
    for(let i=0 ; i<=n; i++){
        total += i
    }
    return total
}
```

```
function addUpToN(n) {
    return n * (n + 1) /2
}
```

so one way to measure time taken by both these numbers is to use timers like this:

```
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`time elapsed ${(t2-t1)/1000} seconds`)

for first its 1.25 sec
for second its 0 sec (not really)
```

But time depends on machine and even on same machine this method can give different readings so we needed something more standard to measure efficiency and thats why we use Big-O.

### Lecture 3:

Instead of time we calculate number of simple operations which processor would do to finish a function. Like algorithimic, assignment operations etc.

```
for first implementation : 5n + 2 operations
for second implementation : 2 operations
```

### Lecture 5:

Big-O is denoted as O(n) similarly to f(n), and since its calculated for upper bound i.e., worst case scenario of the algorithm. n means size of input.

- O(n) - linear
- O(n<sup>2</sup>) - quadratic
- O(1) - constant (independent of size of input)
- or could be something totally different

```
function countUpAndDown(n){
    console.log('going up');
    for(let i =0; i<n; i++){
        console.log(i);
    }
    console.log('at the top!\ngoing down');
    for(let i=n-1; i>0; i--){
        console.log(i);
    }
    console.log('Back down! Bye.')
}
```

> so since this function has two loops and one loop has time complexity of O(n) then entire function has O(n).

```
function printAllPairs(n){
    for(let i=0;i <=n; i++){
        for(let j=0; j<=n; j++){
            console.log(i,j)
        }
    }
}
```

> this function has O(n) operations inside O(n) operation hence its O(n^2^)

### Lecture 6:

_smaller numbers doesn't matter._ These big-O calculation are generally calculated for huge numbers of input so constants and smaller digits doesnt matter. for e.g:

- O(n<sup>2</sup> + 3n + 2 ) -> tail is redundant -> O(n<sup>2</sup>)

some shorthands are:

- arithemtic operations are constant.
- variable assignment is constant.
- accesing elements in an array(by index) or an object(by key) is also constant.
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

Time complexity plot:
![Time complexity plot](./images/complexity%20plot.png)

### Lecture 7:

Space complexity: measure of how much space an alogrithm needs to run. _Auxiliary Space Time Complexity_ is referred as space required by algorithm to run not to store the input data. Generally both the above terms are same.

some shorthands are:

- primitives take constant spaces O(1)
- Strings require O(n) space because its collection of characters.
- Reference types are generally O(n) where n is length of array or number of keys in an object.

```
function sum(arr){
    let total = 0;
    for(let i =0; i<arr.length; i++){
        total += i;
    }
    return total
}
```

In this example, total and i are only space taken by algo that means it has O(1) space complexity

```
function double(arr){
    let newArr = [];
    for(let i =0; i<arr.length; i++){
        newArr = newArr.push(2 * arr[i])
    }
    return total
}
```

this function has O(n) space complexity

### Lecture 8:

Logarithmic time complexity O(log(n)). searching algos, efficient sorting algos and recursion involves logarithmic space complexity

## Section 2: Analyzing Performance of arrays and objects

### Lecture 9:

Big-O of Objects: (its quick)

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

Big O of Object Methods:

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

### Lecture 10:

WHEN TO USE ARRAYS

- When you need order
- When you need fast access / insertion and removal (sort of....)

Big O of Arrays:-

- Insertion - It depends....
- Removal - It depends....
- Searching - O(N)
- Access - O(1)

> Insertion and removal at end is O(1) but from beginning its O(n) because of reassignment done by processor to make the indexes correct after insertion or removal.

### Lecture 11:

Big O of Array Operations:-

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N \* log N)
- forEach/map/filter/reduce/etc. - O(N)

## Section 3: Problem solving approach

### Lecture 12:

> WHAT IS AN ALGORITHM?

A process or set of steps to accomplish a certain task.

> Why do I need to know this?

Almost everything that you do in programming involves some kind of algorithm!
It's the foundation for being a successful problem solving and developer

Also... _*INTERVIEWS*_

> PROBLEM SOLVING

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor

### Lecture 13:

> UNDERSTAND THE PROBLEM

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

> e.g: write a function which takes numbers as input and returns their sum

1. Can I restate the problem in my own words?

- implement addition

2. What are the inputs that go into the problem?

- int? float? String?
- how many inputs ?
- what if user doesn't pass an input?

3. What are the outputs that should come from the solution to the problem?

- int? float? string?
- with what precision?

and so on other questions need to be answered before starting to actually write the solution

### Lecture 14:

> Explore concrete examples

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

> for e.g: Write a function which takes in a string and returns counts of each character in the string.

lets say charCount(str) is our function, then

- charCount("aaaa") // {a:4} or {a:4, b:0, ...}
- charCount("hello") // {h:1, e:1, l:2, o:1}
- "my phone number is 23423532" // what about spaces, numbers special characters?
- "Hello hi" // what about casing
- what about invalid inputs like integer, boolean, undefined or objects.
- what about no inputs

### Lecture 15:

> Break it down

for e.g: Write a function which takes in a string and returns counts of each character in the string.

after we have gone through all the required inputs and output criteria we can start with something like this

```
function charCount(str){
    // make object to return at the end.
    // loop over all the characters (str to lowercase)
        //if the char is a number/letter then only proceed
            // if char exist in object increase the count
            // else add the char in object with value 1
    // return the object
}
```

then we can solve the solution something like this:

```
function charCount(str){
    let countObj = {}
    str.toLowerCase().split("").forEach((ch) => {
        if ((ch >='0' && ch<='9') || (typeof ch.trim() == 'string' && ch.trim() !== '')){
            if(countObj.hasOwnProperty(ch)){
                countObj[ch] += 1
            }else{
                countObj[ch] =1
            }
        }
    })
    return countObj
}
```

### Lecture 16:

> solve/simplify

just start solving the problem with whatever part you can resolve first, build the structure and then try some cases which you expected to pass. Then solve the stuck part with a little bit of more brainstorming.

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

### Lecture 17:

> LOOK Back & REFACTOR

REFACTORING QUESTIONS:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

so for e.g, after refactoring we have an efficient way for that if condition:

```
// if ((ch >='0' && ch<='9') || (typeof ch.trim() == 'string' && ch.trim() !== ''))

if(/[a-z0-9]/.test(ch))
```

this will test for numbers and strings and exclude special characters and spaces.

further optimizations led to

```
function charCount(str){
    let countObj = {}
    for(let ch of str){
        if(isAlphaNumeric(ch)){
            ch = ch.toLowerCase()
            countObj[ch] = ++countObj[ch] || 1
        }
    }
    return countObj
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) &&
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)){
        return false;
    }
    return true
}

charCount("Hello hi!!")

output: {h: 2, e: 1, l: 2, o: 1, i: 1}
```

## Section 4: Problem solving patterns

### Lecture 18: Intro to problem solving patterns

SOME PATTERNS...

    Frequency Counter
    Multiple Pointers
    Sliding Window
    Divide and Conquer
    Dynamic Programming
    Greedy Algorithms
    Backtracking
    Many more!

### Lecture 19: Frequency counter pattern

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

AN EXAMPLE

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

    same([1,2,3], [4,1,9]) // true
    same([1,2,3], [1,9]) // false
    same([1,2,1], [4,4,1]) // false (must be same frequency)

Naive approach - O(n\*\*2):

```
function same(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false

    for(let num of arr1){
        correctIndex = arr2.indexOf(num**2)
        if(correctIndex === -1)
            return false
        arr2.splice(correctIndex,1)
        console.log(arr2)
    }
    return true
}

same([1,2,3,5], [1,4,4,9])
```

Refactored solution - O(n): make objects and store frequency of contents in array then compare it.

```
function same(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    arr1.forEach((num) => {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    })

    arr2.forEach((num) => {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    })

    arr1.forEach((num) => {
        if(frequencyCounter1[num] !== frequencyCounter2[num**2]
           || !(num ** 2 in frequencyCounter2))
            return false
    })

    return true
}

same([1,2,3,2], [1,4,4,4])
```

### Lecture 20: Anagrams

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

```
function validAnagram(str1, str2){
    if(str1.length !== str2.length)
        return false

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let ch of str1)
        freqCounter1[ch] = (freqCounter1[ch] || 0) + 1

    for(let ch of str2)
        freqCounter2[ch] = (freqCounter2[ch] || 0) + 1

    for(let key in freqCounter1){
        if(freqCounter1[key] !== freqCounter2[key])
            return false
    }
    return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

a more optimized solution using just one object

```
function validAnagram(str1, str2){
    if(str1.length !== str2.length)
        return false

    let lookup = {}
    for(let ch of str2)
        lookup[ch] = (lookup[ch] || 0) + 1

    for(let ch of str1){
        if(!(ch in lookup))
            return false
        lookup[ch]-=1
    }

    return true
}
```

### Lecture 21: Multiple pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

for eg: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

naive solution:

```
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

sumZero([-3,-2,-1,0,2,3,4])
```

refactored solution:

```
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left<right) {
        sum = arr[left] + arr[right]
        if(sum === 0)
            return [arr[left], arr[right]]
        sum > 0 ? right-- : left++
    }
}

sumZero([-3,-2,-1,0,4])
```

### Lecture 22-23: Count Unique values problem

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

first approach when input arr can be modified:

```
function countUniqueValues(arr) {
    if(arr.length === 0)
        return 0
    let i = 0
    let j = 1
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i+=1
            arr[i] = arr[j]
        }
        j += 1
    }
    return i+1
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
```

second approach when input arr can't be modified.

```
function countUniqueValues2(arr) {
    if(arr.length === 0)
        return 0
    let i = 0
    let j = 1
    let uniqueValues = 0
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            uniqueValues+=1
            i = j
        }
        j += 1
    }
    return uniqueValues
}
```

### Lecture 24: SLIDING WINDOW

This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

example:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

naive approach - O(n\*\*2)

```
function maxSubarraySum(arr,num) {
    if(arr.length === 0)
        return null
    let maxSum = -Infinity
    for(let i=0 ; i < arr.length; i++){
        tempMax = 0
        for(let j=0 ;j < num; j++){
            tempMax += arr[i+j]
        }
        if(tempMax>maxSum)
            maxSum = tempMax
    }

    return maxSum
}

maxSubarraySum([1,2,5,2,8,1,5],4)
```

optimized approach - sliding window - O(n)

```
function maxSubarraySum(arr,num) {
    if(arr.length === 0)
        return null
    let tempMax = 0;
    for(let i = 0; i<num; i++)
        tempMax += arr[i]
    let maxSum = tempMax
    for(let j= num; j< arr.length; j++){
        tempMax = tempMax + arr[j] - arr[j-num]
        maxSum = Math.max(tempMax, maxSum)
    }
    return maxSum
}

maxSubarraySum([1,2,5,2,8,1,5],4)
```

## Section 5: Challenges

### challenge 1:

Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false

```
function sameFrequency(num1, num2) {
    let arr1 = String(num1).split('')
    let arr2 = String(num2).split('')

    if(arr1.length !== arr2.length)
        return false

    // make a lookup counter
    let lookupCounter = {}
    for(let x of arr2)
        lookupCounter[x] = (lookupCounter[x] || 0) + 1

    for(let x of arr1){
        // compare if x in lookup counter, if not return false
        if(!(x in lookupCounter))
            return false
        //reduce count in lookup
        lookupCounter[x] -=1
    }

    return true

}
```

### challenge 2:

Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true
    areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:  
Time - O(n)  
Space - O(n)  
Bonus:  
Time - O(n log n)  
Space - O(1)

- frequency counter solution

```
function areThereDuplicates(...args) {
    if(args.length === 0 || args.length === 1)
        return false

    let map = new Map()
    for (let x of args) {
        if(map.has(x))
            return true
        map.set(x,(map.get(x) || 0) + 1)
    }

    return false
}
```

- multiple pointers solution (requires sort)

```
function areThereDuplicates(...args) {
    if(args.length === 0 || args.length === 1)
        return false

    args.sort((a,b) => {
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })

    let start = 0
    let next = 1
    while (next<args.length) {
        if(args[start] === args[next])
            return true
        start++
        next++
    }
    return false
}
```

- oneliner using Set
```
function oneLiner(...args){
    return new Set(args).length !== args.length
}
```
