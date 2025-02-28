package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
