

// like redux


const store = {
    subscribe() {
        //..
    },
    unsubscribe() {
        //..
    },
    getState() {
        return {
            topics: [
                'java',
                'js',
                'scala',
                'pyhton'
            ],
            comments: [
                'java is my life',
                'js is my new friend',
                'python is new baby'
            ],
        }
    }
};

export default store;