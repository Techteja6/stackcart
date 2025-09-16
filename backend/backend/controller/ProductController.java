package com.stackcart.backend.controller;

import com.stackcart.backend.model.Product;
import com.stackcart.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

  @Autowired
  private ProductService service;

  @GetMapping
  public List<Product> getAllProducts() {
    return service.getAll();
  }

  @PostMapping
  public Product addProduct(@RequestBody Product product) {
    return service.save(product);
  }
}