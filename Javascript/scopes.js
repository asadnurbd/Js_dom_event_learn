x = 25; //parent child er sob kichu access korte pare na

function myFun() {
  var x = 8; //child   parents er sob kichu acess korte pare
  console.log(`this is my function ${x}`);
}
console.log(x);
myFun();
