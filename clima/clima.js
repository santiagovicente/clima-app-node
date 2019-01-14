const axios = require('axios');


const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6db2603c1b8bb2a27f547805e985150a`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}