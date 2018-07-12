const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');
const argv = yargs.options({
    a: {
        demand:true,
        alias: "address",
        describe:"address to fetch weather for",
        string:true
    }
}).help().argv;

//geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
//    if(errorMessage){
//        console.log(errorMessage);
//    }
//    else{
//        console.log(JSON.stringify(results,undefined,2))
//    }
//});
weather.getCurrentWeather(argv.address,(errorMessage,results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(results,undefined,2))
        console.log(`Current Temp:${results.currentTemp}`)
        console.log(`Feels Like:${results.feelsLike}`)
    }
});

