package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Animalhealth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalhealthRepo extends JpaRepository<Animalhealth,Integer> {

    List<Animalhealth> findByAnimalInchargeEmail(String email);

    List<Animalhealth> findByDoctorsEmail(String email);

    List<Animalhealth> findByAnimalAid(Integer aid);

    List<Animalhealth> findByAnimalInchargeEmailAndAnimalAid(String email,Integer aid);

    List<Animalhealth> findByDoctorsEmailAndAnimalAid(String email,Integer aid);

}
