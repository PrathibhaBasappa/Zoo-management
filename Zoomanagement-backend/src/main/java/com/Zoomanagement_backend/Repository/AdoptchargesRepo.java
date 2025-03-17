package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Adoptcharges;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdoptchargesRepo extends JpaRepository<Adoptcharges,Integer> {

    List<Adoptcharges> findByAchargesAid(Integer aid);
}
