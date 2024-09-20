function checkCartStatus () {
    const cartWrapper = document.querySelector(".cart-wrapper");
    const cartEmptyBlank = document.querySelector('[data-cart-empty]')
    const orderForm = document.getElementById('order-form')
    
    if (cartWrapper.childElementCount) 
    {
        console.log('Not Empty');
        cartEmptyBlank.classList.add('none')
        orderForm.classList.remove('none')
    }
    else {
        console.log('Empty');
        cartEmptyBlank.classList.remove('none')
        orderForm.classList.add('none')
    }
}

