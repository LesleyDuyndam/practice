const counterElement = document.getElementById('counter');
const amountElement = document.getElementById('amount');

document.getElementById('add').addEventListener('click', () => {
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(amountElement.value);
})

document.getElementById('subtract').addEventListener('click', () => {
    counterElement.innerText = parseInt(counterElement.innerText) - parseInt(amountElement.value);
})