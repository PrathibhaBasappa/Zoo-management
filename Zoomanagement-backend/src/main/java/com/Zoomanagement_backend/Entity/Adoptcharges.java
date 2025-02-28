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
public class Adoptcharges {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chargesid;
    private String year;
    private String amount;

    @ManyToOne
    private Animals acharges;

    @OneToMany(mappedBy = "adoptcharges")
    @JsonIgnore
    List<Adoptions> adoptionscharges;
}
