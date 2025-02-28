package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Feedback;
import com.Zoomanagement_backend.Repository.FeedbackRepo;
import com.Zoomanagement_backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class FeedbackController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private FeedbackRepo feedbackRepo;

    @PostMapping("/PostFeedback/{uemail}")
    public ResponseEntity<?> UserReigistration(@RequestBody Feedback obj, @PathVariable String uemail)
    {
        var users=userRepo.findByEmail(uemail).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setUser(users);
        feedbackRepo.save(obj);
        return new ResponseEntity<>("Feedback Post Successfully", HttpStatus.OK);
    }

    @GetMapping("/Getfeedbacks")
    public ResponseEntity<?> Getfeedbacks()
    {
        var data=feedbackRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
