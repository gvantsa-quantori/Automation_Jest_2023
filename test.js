const axios = require('axios');

describe.skip('API response check', () => {
    let bookingId
    beforeEach(async() => {
        let data = JSON.stringify({
            "firstname": "leo",
            "lastname": "leo",
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
        const response = await axios.request(config)
        console.log(response.data)
        bookingId = response.data.bookingid;
        console.log(bookingId);
    });



    test('Check Book by id', async() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Accept': '*/*'
            }
        };

        const data = await axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });



        expect(data.firstname).toBe('leo');
        expect(data.lastname).toBe('leo');
        expect(data.totalprice).toBe(111);
        expect(data.depositpaid).toBe(true);
        expect(data.additionalneeds).toBe('Breakfast');
    });

    afterEach(async() => {


        try {
            console.log(bookingId);
            await deleteBooking(bookingId);
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    });

    async function deleteBooking(bookingId) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                // 'Cookie': 'token=03f5ee9994a44a7',
                'Accept': "*/* ",
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            }
        };

        await axios.request(config)
    }
});