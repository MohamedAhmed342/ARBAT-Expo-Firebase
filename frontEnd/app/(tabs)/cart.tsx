import { StyleSheet, Text, View } from "react-native";
import React from "react";

const page = () => {
  return (
    <View style={styles.container}>
      <Text>cart</Text>
    </View>
  );
};
/*interface CartItem {
    product: Product;
    quantity: number;
}

// Initialize an empty cart
let cart: CartItem[] = [];

// Function to add a product to the cart
function addToCart(productId: number) {
    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cart.push({ product: productToAdd, quantity: 1 });
        }
    }
    updateCartDisplay();
}

// Function to remove a product from the cart
function removeFromCart(productId: number) {
    const existingItemIndex = cart.findIndex(item => item.product.id === productId);
    if (existingItemIndex !== -1) {
        const existingItem = cart[existingItemIndex];
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
            cart.splice(existingItemIndex, 1);
        }
    }
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach(cartItem => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = 
                <p>${cartItem.product.name} - ${cartItem.product.price}$</p>
                <button onclick="removeFromCart(${cartItem.product.id})">-</button>
                <span>${cartItem.quantity}</span>
                <button onclick="addToCart(${cartItem.product.id})">+</button>
            ;
            cartContainer.appendChild(cartItemElement);
        });
    }
}

// Initialize the cart display
window.onload = updateCartDisplay;
 */
export default page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
