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
    str  = str.toLowerCase()
    str.split("").forEach((ch) => {
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
