package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepo extends JpaRepository<Doctor,Integer> {


    Optional<Doctor> findByEmail(String email);
}
