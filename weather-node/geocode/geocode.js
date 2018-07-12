const request = require('request');

var geocodeAddress = (argAddress,callback)=>{
    const address = encodeURIComponent(argAddress);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDdC9ukeGkl8eUoYeqnxs-EfazVRDuMPlM&address=${address}`,
        json:true
    },(error,response,body)=>{
        if(response.statusCode == 200){
    //        console.log(JSON.stringify(body,undefined,2)); 
            if(body.status =="OK"){

                callback(undefined,{
                    address: body.results[0].formatted_address,
                    lat:body.results[0].geometry.location.lat,
                    long:body.results[0].geometry.location.lng
                });

            }
            else{
                callback("No Resultsz");
            }
        }
        else if(error){
            callback("unable to connect to Google servers");
        }
    })    
}

module.exports ={
    geocodeAddress
}

//  c5917008064b34d92af41f06473f4a80
//      https://api.darksky.net/forecast/[key]/[latitude],[longitude]
 