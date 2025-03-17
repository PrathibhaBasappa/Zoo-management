package com.Zoomanagement_backend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String name;
    private String password;
    private String email;
    private String address;
    private String phone;
    private String status;

    @OneToMany(mappedBy = "users")
    @JsonIgnore
    private List<Adoptions> adoptionsList;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    List<Feedback> feedbacks;
}
