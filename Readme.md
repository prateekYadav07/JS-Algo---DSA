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
```
But time depends on machine and even on same machine this method can give different readings so we needed something more standard to measure efficiency and thats why we use Big-O.

### Lecture 3:
Instead of time we calculate number of simple operations which processor would do to finish a function. Like algorithimic, assignment operations etc.
```
for first implementation : 5n + 2 operations
for second implementation : 2 operations 
```