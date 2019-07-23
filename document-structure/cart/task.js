const container = document.querySelector('.cart__products');
const quantityButton = document.querySelectorAll('.product__quantity-control');
const addButton = document.querySelectorAll('.product__add');


for (let button of quantityButton) {
    button.addEventListener('click', changeValue);
}

for (let button of addButton) {
    button.addEventListener('click', addToCart);
}

function changeValue(event) {

    let value = event.target.parentNode.querySelector('.product__quantity-value');
    let count = +value.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        count++;
        value.innerText = count;
    } else {
        if (count > 1) {
            count--;
            value.innerText = count;
        } else {
            value.innerText = 1;
        }
    }
}

function addToCart(event) {

    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of container.children) {

        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = +productCount.innerText;
            productCount.innerText = total + countFromProduct;

            return;
        }
    }

    const productImg = product.querySelector('.product__image').src;
    const count = product.querySelector('.product__quantity-value').innerText;

    const productToCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;

    container.insertAdjacentHTML('beforeend', productToCart);
}