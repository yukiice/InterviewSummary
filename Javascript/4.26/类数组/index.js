let obj = {}
let arr = [1,2,3,4,6,7,9,0]
for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i]    
}
console.log(obj)


let obj1 ={
    name:'yukiice',
    age:15
}

let arr1 = []

for(let key in obj1){
    arr1[key] = obj1[key]
}

console.log(arr1)

for(let key in arr){
    console.log(key,'key')
}
for(let key of arr){
    console.log(key,'value')
}
for(let key in obj1){
    console.log(key)
}

console.log(Object.keys(obj1));

const qqq = '12345'

for(let key of qqq){
    console.log(key,'value')
}


