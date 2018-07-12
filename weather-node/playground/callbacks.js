var getUser = (id, callback) =>{
    var user ={id:1,name:"Mike"};
    callback(user);
};

getUser(1,(user)=>{
    console.log(user);
});