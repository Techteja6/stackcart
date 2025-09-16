package com.stackcart.backend.controller;

import com.stackcart.backend.model.Order;
import com.stackcart.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/createOrder")
    public Order createOrder(@RequestParam int amount) throws Exception {
        return paymentService.createOrder(amount);
    }
}
