const express = require("express");

const hbs = require("hbs");

const fs = require("fs");

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

// custom middleware, middleware executes linearly ie log and then maintence 
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}; ${req.method}; ${req.path};`;
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err){
            console.log(err);
        }
    });
    next();
})

app.use((req,res,next)=>{
    res.render('maintenence.hbs',{pageTitle:"Maintenence"})
});


app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
})
app.get('/',(req, res)=>{
//    res.send('<h1>hello express</h1>');
    res.render('home.hbs',{
        pageTitle:"Welcome Page",
        welcomeMessage: "welcome to express",

    })
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:"About Page",

    });
});

app.get('/bad',(req,res)=>{
    res.send({
        message:"bad request"
    });
});

app.listen(port,()=>{
    console.log("server is up on port 3000");
});