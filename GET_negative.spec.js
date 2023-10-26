const axios = require('axios');

describe('Negative tests for GET request', () => {
    //this is a positive test case for get booking ID
    test.skip('Check error response when booking ID is missing', async() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://restful-booker.herokuapp.com/booking/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 4bb9d7556e50bb0',
                'Accept': "*/* "
            }
        };
        const response = await axios.request(config)

        if (response.status === 200) {
            console.log('Test passed: Response status code is 200');
        } else {
            console.log(`Test failed: Unexpected response status code ${response.status}`);
        }

    })

    test.only('Check system response when sending request to the worg URL', async() => {
        const axios = require('axios');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://restful-booker.herokuapp.com/booking/foo', //wrong adress
            headers: {
                'Authorization': 'Bearer 6b62e9811ee49a9',
                'Content-Type': 'application/json',
                'Accept': "*/* "

            }
        };


        try {
            const response = await axios.request(config);
            // This line will not be executed if an error is thrown
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    })
})