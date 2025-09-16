package com.stackcart.backend.model;

import jakarta.persistence.*;

@Entity
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private double price;
  private String imageUrl;

  // Getters and setters
}