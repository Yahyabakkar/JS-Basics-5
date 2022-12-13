let input = document.getElementById("name")
let submit = document.getElementById("submit")
submit.onclick= function(){
    if(input.value== 'Alice' || input.value == "Bob"){
        alert("Hello "+input.value)
    }
    else alert('hello ' + 'Stranger')
}