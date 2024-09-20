const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (e) {
  if (e.target.hasAttribute("data-cart")) {
    const card = e.target.closest(".card");

    const productInfo = {
      id: card.dataset.id,
      imgScr: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      price: card.querySelector(".price__currency").innerText,
      weight: card.querySelector(".price__weight").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    const itemCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemCart) {
		const counterItemCart = itemCart.querySelector('[data-counter]')
		counterItemCart.innerText = Number(counterItemCart.innerText) + Number(productInfo.counter)
    } else {
      const div = this.document.createElement("div");
      div.innerHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgScr}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
                            `;

      cartWrapper.insertAdjacentElement("beforeend", div);
    }
	card.querySelector("[data-counter]").innerText = '1'
  }
});
