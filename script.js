document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem('cartItems')) {
        sessionStorage.setItem('cartItems', JSON.stringify([]));
    }

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

    function addToCart(productData) {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

        const existingCartItem = cartItems.find(item => item.title === productData.title);

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            cartItems.push({
                title: productData.title,
                price: productData.price,
                quantity: 1
            });
        }

        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

        updateTotalPrice();
    }

    function updateTotalPrice() {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        let totalPrice = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.price.slice(1));
            const quantity = item.quantity || 0;
            totalPrice += price * quantity;
        });

        document.getElementById('total-price').textContent = `€${totalPrice.toFixed(2)}`;
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
