const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

const axios = require('axios');

const argv = yargs.options({
    a: {
        demand:true,
        alias: "address",
        describe:"address to fetch weather for",
        string:true
    }
}).help().argv;

var address = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDdC9ukeGkl8eUoYeqnxs-EfazVRDuMPlM&address=${address}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status =='ZERO_RESULTS'){
        throw new Error('Cant find address');
    }
    console.log(response.data);
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;    
    var weatherUrl = `https://api.darksky.net/forecast/c5917008064b34d92af41f06473f4a80/${lat},${long}`;
    return axios.get(weatherUrl);
}).then((response)=>{
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp}. but feels like ${apparentTemp}`);
}).catch((e)=>{
    console.log(e);
});


