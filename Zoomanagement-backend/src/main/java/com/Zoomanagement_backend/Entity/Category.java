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

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int catid;
    private String category;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    List<Type> types;

}
