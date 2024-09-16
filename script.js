const products = [
    { id: 1, name: "Product 1", price: 10.00, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 20.00, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 30.00, image: "https://via.placeholder.com/150" }
];

let cart = [];

function renderProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

document.getElementById('viewCart').onclick = function() {
    document.getElementById('cartModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = 'none';
    }
}

renderProducts();
