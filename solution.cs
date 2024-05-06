for (let i = 0; i < promises.length; i++) {
    promises[i]
        .then((value) => {
            results[i] = value;
            count++;
        })
        .catch((error) => {
            reject(error);
        });
}