package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Doctor;
import com.Zoomanagement_backend.Entity.User;
import com.Zoomanagement_backend.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorRepo doctorRepo;

    @PostMapping("/AddDoctors")
    public ResponseEntity<?> AddDoctors(@RequestBody Doctor obj)
    {
        doctorRepo.save(obj);
        return new ResponseEntity<>("Doctor Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetDoctors")
    public ResponseEntity<?> GetDoctors()
    {
        var data=doctorRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetDoctorsbyemail/{email}")
    public ResponseEntity<?> GetDoctorsbyemail(@PathVariable String email)
    {
        var data=doctorRepo.findByEmail(email);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @PutMapping("/updatedoctorpassword/{newpwd}/{email}")
    public ResponseEntity<?> updatedoctorpassword(@RequestBody Doctor obj, @PathVariable String newpwd, @PathVariable String email)
    {
        var data=doctorRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        if(data.getPassword().equals(obj.getPassword()))
        {
            data.setPassword(newpwd);
            doctorRepo.save(data);

            return new ResponseEntity<>("Password update successfully", HttpStatus.OK);
        }
        else
        {
            throw new RuntimeException("Invalid Old Password");
        }

    }

    @PutMapping("/updatedoctorprofile/{email}")
    public ResponseEntity<?> updatedoctorprofile(@RequestBody Doctor obj, @PathVariable String email)
    {
        var data=doctorRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        data.setName(obj.getName());
        data.setEmail(obj.getEmail());
        data.setAddress(obj.getAddress());
        data.setPhone(obj.getPhone());
        doctorRepo.save(data);

        return new ResponseEntity<>("Profile Updated successfully", HttpStatus.OK);
    }

}
