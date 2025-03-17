package com.Zoomanagement_backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Adoptions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adopid;
    private String startdate;
    private String endtdate;
    private String status;
    private String description;

    @ManyToOne
    private Adoptcharges adoptcharges;

    @ManyToOne
    private User users;

    @ManyToOne
    private Animals animallist;
    
}
