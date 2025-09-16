package com.stackcart.backend.controller;

import com.stackcart.backend.model.CartItem;
import com.stackcart.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend React app
public class CartController {

    @Autowired
    private CartService cartService;

    // Get all cart items
    @GetMapping
    public List<CartItem> getCartItems() {
        return cartService.getAllCartItems();
    }

    // Add product to cart
    @PostMapping("/add/{productId}")
    public CartItem addToCart(@PathVariable Long productId, @RequestParam int quantity) {
        return cartService.addToCart(productId, quantity);
    }

    // Update quantity of a cart item
    @PutMapping("/update/{cartItemId}")
    public CartItem updateQuantity(@PathVariable Long cartItemId, @RequestParam int quantity) {
        return cartService.updateQuantity(cartItemId, quantity);
    }

    // Remove a cart item
    @DeleteMapping("/remove/{cartItemId}")
    public String removeFromCart(@PathVariable Long cartItemId) {
        cartService.removeFromCart(cartItemId);
        return "Cart item removed successfully!";
    }

    // Clear the entire cart
    @DeleteMapping("/clear")
    public String clearCart() {
        cartService.clearCart();
        return "Cart cleared successfully!";
    }
}
