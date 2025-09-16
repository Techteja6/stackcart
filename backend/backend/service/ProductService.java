package com.stackcart.backend.service;

import com.stackcart.backend.model.Product;
import com.stackcart.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
  @Autowired
  private ProductRepository repo;

  public List<Product> getAll() {
    return repo.findAll();
  }

  public Product save(Product product) {
    return repo.save(product);
  }
}