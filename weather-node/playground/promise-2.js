var geocodeAddress = (address)=>{
    const request = require('request');
    return new Promise((resolve,reject)=>{    
        const argAddress = encodeURIComponent(address);
        
        
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDdC9ukeGkl8eUoYeqnxs-EfazVRDuMPlM&address=${argAddress}`,
            json:true
        },(error,response,body)=>{
                if(response.statusCode == 200){
            //        console.log(JSON.stringify(body,undefined,2)); 
                    if(body.status =="OK"){

                        resolve({
                            address: body.results[0].formatted_address,
                            lat:body.results[0].geometry.location.lat,
                            long:body.results[0].geometry.location.lng
                        });

                    }
                    else{
                        reject("No Results");
                    }
                }
                else if(error){
                    reject("unable to connect to Google servers");
                }            


        }); 
    });
};
console.log(geocodeAddress);
geocodeAddress("000000").then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}).catch((e)=>{
     console.log(e);
});