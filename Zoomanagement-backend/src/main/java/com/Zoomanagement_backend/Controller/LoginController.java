package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.DTO.LoginDto;
import com.Zoomanagement_backend.Repository.AdminRepo;
import com.Zoomanagement_backend.Repository.DoctorRepo;
import com.Zoomanagement_backend.Repository.InchargeRepo;
import com.Zoomanagement_backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private InchargeRepo inchargeRepo;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/LoginVerify")
    public ResponseEntity<?> LoginVerify(@RequestBody LoginDto obj)
    {
        if(obj.getUsertype().equals("Admin"))
        {
            var admin=adminRepo.findByEmail(obj.getEmail()).orElseThrow(()->new RuntimeException("Admin Email Not Found"));
            if(obj.getPassword().equals(admin.getPassword()))
            {
                return new ResponseEntity<>("Admin", HttpStatus.OK);
            }
            else
            {
                return new ResponseEntity<>("Invalid Password",HttpStatus.OK);
            }
        }
        else if(obj.getUsertype().equals("Incharge"))
        {
            var data=inchargeRepo.findByEmail(obj.getEmail()).orElseThrow(()->new RuntimeException("Company Email Not Found"));
            if(obj.getPassword().equals(data.getPassword()))
            {
                return new ResponseEntity<>("Incharge",HttpStatus.OK);
            }
            else
            {
                return new ResponseEntity<>("Invalid Password",HttpStatus.OK);
            }
        }

        else if(obj.getUsertype().equals("Doctor"))
        {
            var data=doctorRepo.findByEmail(obj.getEmail()).orElseThrow(()->new RuntimeException("Company Email Not Found"));
            if(obj.getPassword().equals(data.getPassword()))
            {
                return new ResponseEntity<>("Doctor",HttpStatus.OK);
            }
            else
            {
                return new ResponseEntity<>("Invalid Password",HttpStatus.OK);
            }
        }

        else if(obj.getUsertype().equals("User"))
        {
            var data=userRepo.findByEmailAndStatus(obj.getEmail(),"Approved").orElseThrow(()->new RuntimeException("Company Email Not Found"));
            if(obj.getPassword().equals(data.getPassword()))
            {
                return new ResponseEntity<>("User",HttpStatus.OK);
            }
            else
            {
                return new ResponseEntity<>("Invalid Password",HttpStatus.OK);
            }
        }

        else
        {
            return new ResponseEntity<>("Invalid Usertype", HttpStatus.OK);
        }
    }
}
