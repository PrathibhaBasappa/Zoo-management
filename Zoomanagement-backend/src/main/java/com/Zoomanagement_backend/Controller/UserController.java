package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Incharge;
import com.Zoomanagement_backend.Entity.User;
import com.Zoomanagement_backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/UserReigistration")
    public ResponseEntity<?> UserReigistration(@RequestBody User obj)
    {
        obj.setStatus("Pending");
        userRepo.save(obj);
        return new ResponseEntity<>("User Registration Successfully", HttpStatus.OK);
    }

    @PutMapping("ApproveUsers/{userid}")
    public ResponseEntity<?> ApproveUsers(@PathVariable Integer userid)
    {
        var user=userRepo.findById(userid).orElseThrow(()->new RuntimeException("Not Found"));
        user.setStatus("Approved");
        userRepo.save(user);
        return new ResponseEntity<>("User Approved Successfully",HttpStatus.OK);
    }

    @GetMapping("/Getusers")
    public ResponseEntity<?> Getusers()
    {
        var data=userRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }


    @PutMapping("/updateuserpassword/{newpwd}/{email}")
    public ResponseEntity<?> updateuserpassword(@RequestBody User obj, @PathVariable String newpwd, @PathVariable String email)
    {
        var data=userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        if(data.getPassword().equals(obj.getPassword()))
        {
            data.setPassword(newpwd);
            userRepo.save(data);

            return new ResponseEntity<>("Password update successfully", HttpStatus.OK);
        }
        else
        {
            throw new RuntimeException("Invalid Old Password");
        }

    }

    @PutMapping("/updateuserprofile/{email}")
    public ResponseEntity<?> updateuserprofile(@RequestBody User obj, @PathVariable String email)
    {
        var data=userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));

        data.setName(obj.getName());
        data.setEmail(obj.getEmail());
        data.setAddress(obj.getAddress());
        data.setPhone(obj.getPhone());
        userRepo.save(data);
        return new ResponseEntity<>("Profile updated successfully", HttpStatus.OK);

    }

    @GetMapping("/Getusersbyemail/{email}")
    public ResponseEntity<?> Getusersbyemail(@PathVariable String email)
    {
        var data=userRepo.findByEmail(email);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

}
