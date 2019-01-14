const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    //Esto es para poder poner espacios e la dirección y que no nos de error.
    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para esta ciudad ${direccion}`);
    }

    let location = respuesta.data.results[0];
    let coordenadas = location.geometry.location;



    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}