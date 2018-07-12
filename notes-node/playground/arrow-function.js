//var square = (x) => {
//  return x*x;  
//};

var square = (x) => x*x; 
//one argument
var square = x => x*x; 

console.log(square(9));

var user = {
    name: "mike",
    sayHi: ()=>{
        console.log(arguments);
        
        console.log(`Hi I'm ${this.name}`);//undefined
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi I'm ${this.name}`);
    }
}
user.sayHiAlt(1,2,3);