let a = [1,2,3]
console.log(Object.prototype.toString.call(a)  === "[object Array]")

let b = {name:"1"}
console.log(Object.prototype.toString.call(b) === '[object Object]')

function c(){
    console.log('q')
}
console.log(Object.prototype.toString.call(c) === "[object Function]")



console.log(typeof c);

console.log(typeof null)

// instanceof  

console.log(a instanceof Array)

console.log(a instanceof Object)


//  constructor

console.log(new Number(0).constructor == Number )

console.log([].constructor == Array)
