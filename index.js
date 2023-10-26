const axios = require('axios');

describe('API response check', () => {
    test('Check response fields get_booking_id', async() => {
        let config = {
            method: 'get',
            //maxBodyLength: Infinity,
            url: 'https://restful-booker.herokuapp.com/booking/1660',
            headers: {
                'Authorization': 'Bearer d3b1f2e996a6eca',
                'Accept': "application/json",
                // "Content-Type": "application/json"
            }
        };

        axios.request(config)
            .then((response) => {
                const data = response.data;
                expect(data).toHaveProperty('firstname');
                expect(data.firstname).toBe('leo');
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    });
});