


// service-module ==> business logic 
//---------------------------------------------

let service = {
    getData() {
        let promise = new Promise((resolve, reject) => {
            // API call or any async operations
            setTimeout(function () {
                let result = 25;
                console.log('service1 : resolving promise with result..');
                resolve(result);

                // console.log('rejecting promise with error..');
                //let error = "calculation error";
                //reject(error)

            }, 3000)
        });
        return promise;
    }
}


let service2 = {
    getData() {
        let promise = new Promise((resolve, reject) => {
            // API call or any async operations
            setTimeout(function () {
                let result = 75;
                console.log('service2 : resolving promise with result..');
                resolve(result);
            }, 6000)
        });
        return promise;
    }
}

//---------------------------------------------

// UI-module ==> rendering logic 
//---------------------------------------------

let uiComponent = {
    render() {
        console.log('uiComponent::rendering UI..');

        // let promise = service.getData()

        //#1
        // promise.then(
        //     result => console.log('uiComponent::updating UI with result :' + result),
        //     error => console.log('uiComponent::updating UI with error:' + error)
        // )

        // #2
        // promise chainable
        // promise
        //     .then(result => result + 100)
        //     .then(newResult=>console.log('uiComponent::updating UI with result :' + newResult))


        let promise1 = service.getData();
        let promise2 = service2.getData();

        // #3
        // Promise.all([promise1, promise2])
        //     .then(result => console.log('uiComponent::updating UI with results :' + result))

        // #4    
        // Promise.race([promise1, promise2])
        //     .then(result => console.log('uiComponent::updating UI with results :' + result))


        console.log('cont.. with other rendering.. like progress message..')
    }
}

//---------------------------------------------

uiComponent.render();


//--------------------------------------------



// Quiz



// Promise.resolve('result..')
//     .then(result => console.log(result))

// setTimeout(() => console.log('timeout 1'), 0);







