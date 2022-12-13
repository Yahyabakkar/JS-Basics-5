let value = prompt('enter the number')
let finalResult = 0


for (let i = 1; i <= value; i++) {
    if(i % 3  == 0 || i % 5 == 0){
        finalResult += i;
    }
    else continue
}
alert(finalResult)