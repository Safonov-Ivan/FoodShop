window.addEventListener("click", function (e) {
  if (e.target.dataset.action === "plus") {
    const counterWrapper = e.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    counter.innerText = ++counter.innerText;
  }
  if (e.target.dataset.action === "minus") {
    const counterWrapper = e.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    if (Number(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (Number(counter.innerText) === 1 && e.target.closest('.cart-wrapper')) {
      e.target.closest('.cart-item').remove()
    }

  }
  checkCartStatus()
  productCalc()
});
