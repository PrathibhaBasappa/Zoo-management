package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,Integer> {

    Optional<Admin> findByEmail(String email);
}
