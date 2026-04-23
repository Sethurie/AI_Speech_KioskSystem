package com.malmal.kiosk.controller;

import com.malmal.kiosk.service.GeminiService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AiController {

    private final GeminiService geminiService;

    public AiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/recommend")
    public Map<String, String> recommend(@RequestBody Map<String, String> request) {
        String userMessage = request.getOrDefault("message", "");
        String recommendation = geminiService.getRecommendation(userMessage);
        return Map.of("recommendation", recommendation);
    }
}
