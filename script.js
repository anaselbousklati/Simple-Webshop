document.addEventListener("DOMContentLoaded", function () {
    const productsData = [
        { imageSrc: "AirPod 2nd Gen.jpg", title: "AirPod 2nd Gen", price: "€129" },
        { imageSrc: "apple-watch-pcq.jpg", title: "Apple Watch", price: "€299" },
        { imageSrc: "iPhone-14.jpg", title: "iPhone 14", price: "€999" },
        { imageSrc: "ipad-pro.jpg", title: "iPan Pro", price: "€629" },
        { imageSrc: "AirPod 2nd Gen.jpg", title: "AirPod 2nd Gen", price: "€129" },
        { imageSrc: "apple-watch-pcq.jpg", title: "Apple Watch", price: "€299" },
        { imageSrc: "iPhone-14.jpg", title: "iPhone 14", price: "€999" },
        { imageSrc: "ipad-pro.jpg", title: "iPan Pro", price: "€629" }
    ];

    const allProductsContainer = document.getElementById('all-products');
    const cartItemsContainer = document.getElementById('cart-items');

    function addToCart(productData) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productData.title} - ${productData.price}`;
        cartItemsContainer.appendChild(cartItem);
    }

    function createProductElement(productData) {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = productData.imageSrc;

        const productInfoContainer = document.createElement('div');
        productInfoContainer.classList.add('product-info');

        const productTitle = document.createElement('h4');
        productTitle.classList.add('product-title');
        productTitle.textContent = productData.title;

        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = productData.price;

        const buyNowButton = document.createElement('button');
        buyNowButton.classList.add('product-btn');
        buyNowButton.textContent = 'Koop nu';

        buyNowButton.addEventListener('click', function () {
            addToCart(productData);
        });

        productInfoContainer.appendChild(productTitle);
        productInfoContainer.appendChild(productPrice);
        productInfoContainer.appendChild(buyNowButton);

        productContainer.appendChild(productImage);
        productContainer.appendChild(productInfoContainer);

        allProductsContainer.appendChild(productContainer);
    }

    productsData.forEach(createProductElement);
});
