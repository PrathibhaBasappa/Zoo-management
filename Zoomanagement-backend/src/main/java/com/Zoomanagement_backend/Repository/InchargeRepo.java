package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Incharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InchargeRepo extends JpaRepository<Incharge,Integer> {

    Optional<Incharge> findByEmail(String email);
}
