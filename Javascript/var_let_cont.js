if(true){
    var message="this is var variable"  //var function scope /ei khane pura file ta function sob jaga theke acess korte parbe
    var message="this is var variable again"
}
console.log(message)  //thard parti kono libary use korle same name jodi thake ta hole concreate korbe

if(true){
    let letmessage="this is let variable"  //let variable block scope  block chara kothao aceass pabe na
  //  let letmessage="this is lat variable again" //not possible
    letmessage="this is lat variable again" //possible  reassignd kora  but varible define kora jab na
    console.log(letmessage)
}
// console.log(letmessage) //not possible

if(true){
    const contmessage="this is const variable"  //let variable block scope  block chara kothao aceass pabe na
  //  let letmessage="this is lat variable again" //not possible
 // contmessage="this is const variable again" // not possible  reassignd & varible define kora jab na
    console.log(contmessage)


    const obj={
        name:"javaScript",
        age:"20 years"
    };
    obj.name="js"
    console.log(obj)
}

// console.log(contmessage)



function fun(){
    var a="25";
    console.log(a)

}
// console.log(a)             //not possible
fun();