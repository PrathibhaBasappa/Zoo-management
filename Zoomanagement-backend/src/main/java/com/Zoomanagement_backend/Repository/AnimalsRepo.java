package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Animals;
import com.Zoomanagement_backend.Entity.Incharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalsRepo extends JpaRepository<Animals, Integer> {

    List<Animals> findByTypeTid(Integer tid);

    List<Animals> findByInchargeEmail(String email);

}
