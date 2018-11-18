

let swiggy = {
    getFood() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('biryani');
                reject('sorry');
            }, 2000);
        });
        return promise;
    }
}

export { swiggy };