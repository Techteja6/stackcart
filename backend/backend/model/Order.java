package com.stackcart.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String razorpayOrderId;
    private String currency;
    private int amount; // in paise
    private String status;

    public Order() {}

    public Order(String razorpayOrderId, String currency, int amount, String status) {
        this.razorpayOrderId = razorpayOrderId;
        this.currency = currency;
        this.amount = amount;
        this.status = status;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public String getRazorpayOrderId() { return razorpayOrderId; }
    public void setRazorpayOrderId(String razorpayOrderId) { this.razorpayOrderId = razorpayOrderId; }
    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }
    public int getAmount() { return amount; }
    public void setAmount(int amount) { this.amount = amount; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
