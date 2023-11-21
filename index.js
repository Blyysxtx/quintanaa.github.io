const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    if (containerCartProducts.classList.contains('hidden-cart')) {
        containerCartProducts.classList.remove('hidden-cart');
    } else {
        containerCartProducts.classList.add('hidden-cart');
    }
});
