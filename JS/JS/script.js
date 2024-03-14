const fun = (num) =>{
    console.log(num)
    setTimeout(() => {
        num++
        console.log(num)
    }, 2000);
    console.log(num)
}
fun(10)