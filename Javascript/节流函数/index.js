function debounce(f,t){
    let timer
    return (...args)=>{
        clearTimeout(timer)
        timer =  setTimeout(()=>{
            f(...args)
        },t)
    }
}