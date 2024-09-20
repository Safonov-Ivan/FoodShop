const products = [
  {
    id: 1,
    title: "Филадельфия хoт ролл",
    itemsInBox: 6,
    weight: 180,
    price: 300,
    imgSrc: "philadelphia.jpg",
  },
  {
    id: 2,
    title: "Калифорния темпура",
    itemsInBox: 6,
    weight: 205,
    price: 250,
    imgSrc: "california-tempura.jpg",
  },
  {
    id: 3,
    title: "Запеченый ролл «Калифорния»",
    itemsInBox: 6,
    weight: 182,
    price: 230,
    imgSrc: "zapech-california.jpg",
  },
  {
    id: 4,
    title: "Филадельфия",
    itemsInBox: 6,
    weight: 230,
    price: 320,
    imgSrc: "philadelphia.jpg",
  },
];

const productsContainer = document.querySelector(".prod_container");

productRender();

function productRender() {
  products.forEach(function (product) {
    const prodHtml = `
        			<div class="col-md-6">
						<div class="card mb-4" data-id="${product.id}">
							<img class="product-img" src="img/roll/${product.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${product.title}</h4>
								<p><small data-items-in-box class="text-muted">${product.itemsInBox} шт.</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${product.weight}г.</div>
										<div class="price__currency">${product.price}</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

							</div>
						</div>
					</div>`;
    productsContainer.insertAdjacentHTML("beforeend", prodHtml);
  });
}
