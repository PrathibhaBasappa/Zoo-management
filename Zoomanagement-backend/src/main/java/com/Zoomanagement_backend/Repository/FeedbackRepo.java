package com.Zoomanagement_backend.Repository;

import com.Zoomanagement_backend.Entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {
}
