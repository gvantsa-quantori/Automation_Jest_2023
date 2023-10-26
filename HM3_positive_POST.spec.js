const axios = require('axios');

describe('More checks for POST request', () => {

});

test('Check all fields ', async() => {
    let data = JSON.stringify({
        "firstname": "beautiful",
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
    console.log(response.data.booking)

    expect(response.status).toBe(200);
    expect(response.data.booking.firstname).toBe('beautiful');
    expect(response.data.booking.lastname).toBe('test');
    expect(response.data.booking.totalprice).toBe(111);
    expect(response.data.booking.depositpaid).toBe(true);
    expect(response.data.booking.additionalneeds).toBe('Breakfast');
    expect(response.data.booking.bookingdates.checkin).toBe('2018-01-01');



});