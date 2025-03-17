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
public class Incharge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int inchargeid;
    private String name;
    private String password;
    private String email;
    private String address;
    private String phone;

    @OneToMany(mappedBy = "incharge")
    @JsonIgnore
    List<Animals> animals;


}
