// 初始薪资10000 每年递增5%
function gz(a) {
  return function () {
    let e = 10000;
    let d = 0.05
    const b = new Array(a).fill(d)
    for (let index = 0; index < b.length; index++) {
        e += e*d
    }
    return e
  };
}

const c = new gz(5);

console.log(c())




// 输出 q x
var x = [1,2,3]

var q = x
q.push(4)
console.log(x,q)




