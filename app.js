//Product Class 
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Optional: Method to display product details
    toString() {
        return `Product(id=${this.id}, name=${this.name}, price=${this.price})`;
    }
}



// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price for this item
    totalPrice() {
        return this.product.price * this.quantity;
    }

    // Optional: Method to display item details
    toString() {
        return `ShoppingCartItem(product=${this.product.toString()}, quantity=${this.quantity}, totalPrice=${this.totalPrice()})`;
    }
}



// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        // Check if the item already exists in the cart
        let item = this.items.find(item => item.product.id === product.id);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove items from the cart by product ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to get the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }

    // Method to display all items in the cart
    displayCart() {
        this.items.forEach(item => console.log(item.toString()));
        console.log(`Total items: ${this.getTotalItems()}`);
        console.log(`Total price: $${this.getTotalPrice().toFixed(2)}`);
    }
}


// Testing the Classes
// Create products
const p1 = new Product(1, "Laptop", 1000.00);
const p2 = new Product(2, "Mouse", 25.00);
const p3 = new Product(3, "Keyboard", 50.00);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(p1, 1);
cart.addItem(p2, 2);
cart.addItem(p3, 1);

// Display the cart
console.log("Cart after adding items:");
cart.displayCart();

// Remove an item from the cart
cart.removeItem(p2.id);

// Display the cart again
console.log("\nCart after removing mouse:");
cart.displayCart();
