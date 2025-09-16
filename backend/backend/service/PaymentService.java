package com.stackcart.backend.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.stackcart.backend.model.Order as OrderEntity;
import com.stackcart.backend.repository.OrderRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private final OrderRepository orderRepository;
    private final RazorpayClient razorpayClient;

    public PaymentService(OrderRepository orderRepository,
                          @Value("${razorpay.key}") String razorpayKey,
                          @Value("${razorpay.secret}") String razorpaySecret) throws Exception {
        this.orderRepository = orderRepository;
        this.razorpayClient = new RazorpayClient(razorpayKey, razorpaySecret);
    }

    public OrderEntity createOrder(int amount) throws Exception {
        JSONObject options = new JSONObject();
        options.put("amount", amount * 100); // Razorpay works in paise
        options.put("currency", "INR");
        options.put("payment_capture", 1);

        Order order = razorpayClient.Orders.create(options);

        // Save in DB
        OrderEntity orderEntity = new OrderEntity(
                order.get("id"),
                order.get("currency"),
                order.get("amount"),
                "CREATED"
        );
        return orderRepository.save(orderEntity);
    }
}
