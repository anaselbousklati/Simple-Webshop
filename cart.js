function updateTotalPrice() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.price.slice(1));
        const quantity = item.quantity || 0;
        totalPrice += price * quantity;
    });

    if (totalPriceElement) {
        totalPriceElement.textContent = `€${totalPrice.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    updateTotalPrice(); // Make sure to call updateTotalPrice after removing an item
}

function displayCartItems() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Je winkelwagen is nog leeg.</p>';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('cart-table');

    const headerRow = table.insertRow();
    const headerTitles = ['Product', 'Prijs', 'Aantal', 'Totaal', 'Acties'];
    headerTitles.forEach(title => {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = title;
    });

    cartItems.forEach((item, index) => {
        const row = table.insertRow();
        const cells = [
            { value: item.title },
            { value: item.price },
            { value: item.quantity },
            { value: `€${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}` },
            {
                value: `<button onclick="removeFromCart(${index})">Verwijderen</button>`
            }
        ];

        cells.forEach(cell => {
            const cellElement = row.insertCell();
            cellElement.innerHTML = cell.value;
        });
    });

    cartItemsContainer.innerHTML = '';
    cartItemsContainer.appendChild(table);

    updateTotalPrice();
}


displayCartItems();
