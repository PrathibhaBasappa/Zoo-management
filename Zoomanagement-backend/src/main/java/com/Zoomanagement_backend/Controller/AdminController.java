package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Admin;
import com.Zoomanagement_backend.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;

    @PutMapping("/updatepassword/{newpwd}/{email}")
    public ResponseEntity<?> updatepassword(@RequestBody Admin obj, @PathVariable String newpwd,@PathVariable String email)
    {
        var admin=adminRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        if(admin.getPassword().equals(obj.getPassword()))
        {
            admin.setPassword(newpwd);
            adminRepo.save(admin);

            return new ResponseEntity<>("Password update successfully", HttpStatus.OK);
        }
        else
        {
            throw new RuntimeException("Invalid Old Password");
        }

    }

}
