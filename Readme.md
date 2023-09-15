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
- O(n^2) - quadratic
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
