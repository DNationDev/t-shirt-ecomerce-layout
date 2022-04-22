


const addCart = document.querySelectorAll('.add-to-cart')
const prices = document.querySelectorAll('.price')
const counter = document.querySelector('.counter')
cartCounter = 0;

shoppingCart();

addCart.forEach(cardBtn => {
    
    cardBtn.addEventListener('click', e =>{
        let btn = e.target;
        cartCounter++;
        counter.innerHTML = cartCounter;
    })
})



function shoppingCart() {
    let newPrice = [];

    
}