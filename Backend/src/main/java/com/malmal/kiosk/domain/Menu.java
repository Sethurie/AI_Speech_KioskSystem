package com.malmal.kiosk.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long price;
    private String type;
    private String img; // imageUrl에서 img로 변경

    private String category;

    protected Menu() {}

    public Menu(String name, Long price, String type, String img, String category) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.img = img;
        this.category = category;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Long getPrice() { return price; }
    public String getType() { return type; }
    public String getImg() { return img; } // Getter 이름도 변경
    public String getCategory() { return category; }
}
