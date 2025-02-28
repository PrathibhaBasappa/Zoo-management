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
public class Animals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int aid;
    private String name;
    private String age;
    private String gender;
    private String date;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String image;

    @ManyToOne
    private Incharge incharge;

    @ManyToOne
    private Type type;

    @OneToMany(mappedBy = "animal")
    @JsonIgnore
    private List<Animalhealth> animalhealths;

    @OneToMany(mappedBy = "animallist")
    @JsonIgnore
    private List<Adoptions> adoptions;

    @OneToMany(mappedBy = "acharges")
    @JsonIgnore
    private List<Adoptcharges> listcharges;
}
