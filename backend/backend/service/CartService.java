package com.stackcart.backend.service;

import com.stackcart.backend.model.CartItem;
import com.stackcart.backend.model.Product;
import com.stackcart.backend.repository.CartItemRepository;
import com.stackcart.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    // Get all cart items
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    // Add product to cart
    public CartItem addToCart(Long productId, int quantity) {
        Optional<Product> productOpt = productRepository.findById(productId);

        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            return cartItemRepository.save(cartItem);
        }
        throw new RuntimeException("Product not found with ID: " + productId);
    }

    // Update cart item quantity
    public CartItem updateQuantity(Long cartItemId, int quantity) {
        Optional<CartItem> cartItemOpt = cartItemRepository.findById(cartItemId);

        if (cartItemOpt.isPresent()) {
            CartItem cartItem = cartItemOpt.get();
            cartItem.setQuantity(quantity);
            return cartItemRepository.save(cartItem);
        }
        throw new RuntimeException("Cart item not found with ID: " + cartItemId);
    }

    // Remove cart item
    public void removeFromCart(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    // Clear all items from cart
    public void clearCart() {
        cartItemRepository.deleteAll();
    }
}
