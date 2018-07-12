const request = require('request');

const geoCode = require('../geocode/geocode');

var getCurrentWeather = (argAddress,callback)=>{
    const address = encodeURIComponent(argAddress);
    geoCode.geocodeAddress(address,(errorMessage,results)=>{
        if(errorMessage){
            console.log(errorMessage)
        }
        else{
            request({
                url:`https://api.darksky.net/forecast/c5917008064b34d92af41f06473f4a80/${results.lat},${results.long}`,
                json:true
            },(error,response,body)=>{
                if(response.statusCode == 200){
            //        console.log(JSON.stringify(body,undefined,2)); 
//                    if(body.status =="OK"){

                        callback(undefined,{
                            currentTemp:body.currently.temperature,
                            feelsLike:body.currently.apparentTemperature
                        });

//                    }

                }
                
                else if(error){
                    callback("unable to connect to Darksky servers");
                }
                else{
                    callback("No Results");
                }                
            });             
        }
       
    });
    
}
module.exports ={
    getCurrentWeather
}