let a=25;
let b=20;

let sum=function(){
    return  function(){
        return a+b;
    }
}

let  sum2= sum();
console.log(sum2())


function async(){
    var value=10;
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 1000);


      var myFunctt=()=>{
        console.log("hello nur");
    }
    setTimeout(myFunctt,3000);
}

async();
var value=50;

