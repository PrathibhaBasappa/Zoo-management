package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Adoptions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdoptionsRepo extends JpaRepository<Adoptions,Integer> {

    List<Adoptions> findByAnimallistInchargeEmail(String email);
}
