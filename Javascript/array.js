const fruits = [];
fruits.push("banana", "apple", "peach");
fruits[5] = "mango";

console.log(fruits.length);
console.log(Object.keys(fruits));

console.log(fruits);
fruits.length = 10;
console.log(fruits.length);
console.log(fruits[8]); // undefined

///Decreasing
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
console.log(fruits);

const fruits_2 = ["amm", "jam", "kola"];

fruits_2.forEach((item1) => {
  console.log(`${item1}: ${item1}`);
});

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.push("nur add");
colors.push("pop");
// colors.pop()

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}

//array reverse
const size = ["small", "midium", "long"];
const newSize=[];
for (const ky of size.toReversed()) {
  newSize.push(ky);
}
console.log(newSize);
// const newsize = size.toReversed();
size.unshift("khan")
console.log(size);

size.shift()
console.log(size);



// JavaScript Demo: includes
console.log(size.includes('midium'))
console.log(size.indexOf(0))

if(size.indexOf(1)){
  console.log(`i am find data ${size.indexOf(1)}`)
}else{
  console.log(`i am not find data `)

}

