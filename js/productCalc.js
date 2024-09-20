function productCalc () {

    const cartWrapper2 = document.querySelector(".cart-wrapper");
    const totalPrice = document.querySelector(".total-price");
    const deliveryPrice = document.querySelector('.delivery-cost')
    const priceAll = cartWrapper2.querySelectorAll('.price__currency')
    
    
    let totalPriceCount = 0
    priceAll.forEach(
        function (elem) {
            const quantity = elem.closest(('.cart-item')).querySelector("[data-counter]").innerText
            console.log(quantity);
            console.log(elem.innerText);
            totalPriceCount += Number(quantity) * Number(elem.innerText)
        }
    )
    totalPrice.innerText = totalPriceCount

    if (totalPriceCount < 1000 ) {
        deliveryPrice.innerText = '500 tg'
    } else {
        deliveryPrice.classList.add('free')
        deliveryPrice.innerText = 'Бесплатно'
    }
}



