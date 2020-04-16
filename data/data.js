const axios = require("axios");

const getLocation= async (dir) => {
    const resp = await axios({
        "method":"GET",
        "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key":"e8ae204229msh1010d1fbc3766d5p15f375jsncc279bd56cb1"
        },"params":{
        "location": dir
        }
        });
        if (resp.data.Results.length===0){
            throw new Error(`No hay resultados para ${dir}`);
        }
        const data = resp.data.Results[0];
        const { name:direction, lat:latitud ,lon:longitud } = data;
        return {direction,latitud, longitud}
    }

    const getWeather = async( latitud, longitud)=> {
        const resp =  await 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=e2f8e42b42b80860a0aedf0a70f7ae28&units=metric`);
        return resp.data.main.temp;
    }

    const getInfo = async (direction)=> {
        try {
            const location = await getLocation(direction);
            const weather =  await getWeather(location.latitud, location.longitud);
            return `El clima de ${location.direction} es de ${weather}`;
        } catch (err) {
            return `No se encontro el clima de ${direction}`;
        }
    }


module.exports = {
    getLocation,
    getWeather,
    getInfo
}
