```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((value) => {
                    results[i] = value;
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}

// Test the function
let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
let promise3 = 42;

promiseAll([promise1, promise2, promise3]).then(values => {
    console.log(values); // expected output: Array [3, "foo", 42]
}).catch(error => {
    console.log(error);
});
```