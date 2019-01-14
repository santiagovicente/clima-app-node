const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//El yargs sirve para poder introducir por consola los parametros.
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad del clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    let cord = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(cord.lat, cord.lng);

    return `El clima  en ${cord.direccion} es de ${temp}`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//Esto de aqui abajo se uso antes de hacer el getInfo.
/*lugar.getLugarLatLng(argv.direccion)
    .then(respuesta => {
        console.log(respuesta);
    }).catch(e => console.log(e));

clima.getClima(39.5696005, 2.6501603)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));*/