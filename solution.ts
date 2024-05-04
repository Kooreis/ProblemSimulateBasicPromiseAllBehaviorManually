Here is a TypeScript console application that simulates the basic behavior of Promise.all():

```typescript
function promiseAll(promises: Promise<any>[]): Promise<any[]> {
    return new Promise((resolve, reject) => {
        let results: any[] = [];
        let count = promises.length;
        if (count === 0) {
            resolve(results);
            return;
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((value) => {
                results[i] = value;
                count--;
                if (count === 0) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        }
    });
}

// Test the function
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'bar');
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'baz');
});

promiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values); // ['foo', 'bar', 'baz']
}).catch((error) => {
    console.error(error);
});
```

This code defines a function `promiseAll` that takes an array of promises and returns a new promise that resolves when all the input promises have resolved, or rejects as soon as one of the input promises rejects. The resolved value of the `promiseAll` promise is an array of the resolved values of the input promises, in the same order as the input promises. The function is then tested with three promises that resolve after different amounts of time.