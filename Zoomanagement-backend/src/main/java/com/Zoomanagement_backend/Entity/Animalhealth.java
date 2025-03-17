package com.Zoomanagement_backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Animalhealth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hid;
    private String checkupdate;
    private String weight ;
    private String temperature;
    private String heartrate;
    private String treatmentplan;
    private String description;

    @ManyToOne
    private Animals animal;

    @ManyToOne
    private Doctor doctors;
}
