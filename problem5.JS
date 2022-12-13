let number = document.getElementById('number')
let submit = document.getElementById('submit')

let sum = document.getElementById('sum')
let product = document.getElementById('product')

sum.style.display = "none";
product.style.display = "none";

submit.onclick = (e) => {
    sum.style.display = "block";
    product.style.display = "block";

    sum.onclick = () => {
        let result = 0;
        for (let i = 1; i <= number.value; i++) {
            result += i;
        }
        alert(result)
    }
    product.onclick = () => {
        let result = 1
        for (let i = 1; i <= number.value; i++) {
            result *= i;
        }
        alert(result)
    }
}