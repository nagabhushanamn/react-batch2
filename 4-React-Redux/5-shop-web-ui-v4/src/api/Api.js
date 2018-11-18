

const Api = {
    buy(item) {
        let apiUrl = 'http://localhost:8082/v1/api/cart/nag'
        return fetch(apiUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
    }
}

export default Api