let RESOLVE = "resolve";
let REJECT = "reject";
let PENDING = "pending";

class Promises {
  reason = undefined;
  res = undefined;
  status = PENDING;
  constructor(excution) {
    const resolve = (res) => {
      if (this.status === PENDING) {
        this.res = res;
        this.status = RESOLVE;
      }
    };
    const reject = (reason)=>{
        if (this.status === PENDING) {
            this.reason = reason
            this.status = REJECT
        }
    }
    excution(resolve,reject)
  }
  then(onResolve,onReject){
      if (this.status === RESOLVE) {
          onResolve(this.res)
      }
      if (this.status === REJECT) {
          onReject(this.reason)
          
      }
  }
}

const test= new Promises((resolve,reject)=>{
    resolve('花花')
})

test.then((res)=>{
    console.log(res)
},(err)=>{
    console.log(err)
})
