const axios = require('axios');

describe('More checks for negative POST request HM3', () => {

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

    test('Check system response when user send empty last name', async() => {
        let data = JSON.stringify({
            "firstname": "testestname",
            "lastname": "",
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

    test('Check system response when user sends sting as totalprince', async() => {
        let data = JSON.stringify({
            "firstname": "testestname",
            "lastname": "",
            "totalprice": "words",
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

})