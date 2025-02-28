package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Incharge;
import com.Zoomanagement_backend.Repository.InchargeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")

public class InchargeController {

    @Autowired
    private InchargeRepo inchargeRepo;

    @PostMapping("/AddIncharge")
    public ResponseEntity<?> AddIncharge(@RequestBody Incharge obj)
    {
        inchargeRepo.save(obj);
        return new ResponseEntity<>("Incharge Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetIncharge")
    public ResponseEntity<?> GetCategory()
    {
        var incharges=inchargeRepo.findAll();
        return new ResponseEntity<>(incharges,HttpStatus.OK);
    }

    @PutMapping("/updateinchargepassword/{newpwd}/{email}")
    public ResponseEntity<?> updatepassword(@RequestBody Incharge obj, @PathVariable String newpwd, @PathVariable String email)
    {
        var incharge=inchargeRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        if(incharge.getPassword().equals(obj.getPassword()))
        {
            incharge.setPassword(newpwd);
            inchargeRepo.save(incharge);

            return new ResponseEntity<>("Password update successfully", HttpStatus.OK);
        }
        else
        {
            throw new RuntimeException("Invalid Old Password");
        }

    }

    @GetMapping("/GetInchargebtemail/{email}")
    public ResponseEntity<?> GetInchargebtemail(@PathVariable String email)
    {
        var incharges=inchargeRepo.findByEmail(email);
        return new ResponseEntity<>(incharges,HttpStatus.OK);
    }

    @PutMapping("/updateinchargeprofile/{email}")
    public ResponseEntity<?> updateinchargeprofile(@RequestBody Incharge obj, @PathVariable String email)
    {
        var incharge=inchargeRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        incharge.setName(obj.getName());
        incharge.setEmail(obj.getEmail());
        incharge.setAddress(obj.getAddress());
        incharge.setPhone(obj.getPhone());
        inchargeRepo.save(incharge);

        return new ResponseEntity<>("Profile Updated successfully", HttpStatus.OK);

    }

}
