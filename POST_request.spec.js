const axios = require('axios');

describe('Negative tests for POST request', () => {

    test('Check system response when user sends empty firstname', async() => {
        let data = JSON.stringify({
            "firstname": "",
            "lastname": "test",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'token=03f5ee9994a44a7',
                'Accept': "*/* "
            },
            data: data
        };

        try {
            const response = await axios.request(config);
        } catch (error) {
            expect(error.response.status).toBe(400);
        }

    });

    test('create booking test', async() => {
        let data = JSON.stringify({
            "firstname": "mytestname",
            "lastname": "test",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'token=03f5ee9994a44a7',
                'Accept': "*/* "
            },
            data: data
        };


        const response = await axios.request(config);
        console.log(response.data)
        expect(response.status).toBe(200);
        expect(response.data.booking.firstname).toBe("mytestname");


    });


})