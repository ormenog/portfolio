package com.example.portfolio_API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRest {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello a tutti";
    }
}
