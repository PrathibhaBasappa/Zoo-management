package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {

    Optional<User> findByEmailAndStatus(String user,String status);

    Optional<User> findByEmail(String user);
}
