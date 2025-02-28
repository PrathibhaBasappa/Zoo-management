package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Adoptions;
import com.Zoomanagement_backend.Entity.Doctor;
import com.Zoomanagement_backend.Repository.AdoptchargesRepo;
import com.Zoomanagement_backend.Repository.AdoptionsRepo;
import com.Zoomanagement_backend.Repository.AnimalsRepo;
import com.Zoomanagement_backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin("*")
public class AdoptAnimalsController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AnimalsRepo animalsRepo;

    @Autowired
    private AdoptionsRepo adoptionsRepo;
    @Autowired
    private AdoptchargesRepo adoptchargesRepo;


    @PostMapping("/PostAdoptAnimals/{aid}/{useremail}/{chargesid}")
    public ResponseEntity<?> PostAdoptAnimals(@RequestBody Adoptions obj, @PathVariable Integer aid,@PathVariable String useremail, @PathVariable Integer chargesid)
    {
        var listanimal = animalsRepo.findById(aid).orElseThrow(() -> new RuntimeException("Not Found"));
        obj.setAnimallist(listanimal);

        var users = userRepo.findByEmail(useremail).orElseThrow(() -> new RuntimeException("Not Found"));
        obj.setUsers(users);

        var charges=adoptchargesRepo.findById(chargesid).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setAdoptcharges(charges);

        obj.setStatus("Pending");
        adoptionsRepo.save(obj);
        return new ResponseEntity<>("Animal Adopted Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetAdoptedanimals")
    public ResponseEntity<?> GetAdoptedanimals()
    {
        var data=adoptionsRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAdoptedanimalsbyuseremail/{email}")
    public ResponseEntity<?> GetAdoptedanimalsbyuseremail(@PathVariable String email)
    {
        var data=adoptionsRepo.findByAnimallistInchargeEmail(email);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @PutMapping("ApproveAdoptanimal/{adoptid}")
    public ResponseEntity<?> ApproveAdoptanimal(@PathVariable Integer adoptid)
    {
        var user=adoptionsRepo.findById(adoptid).orElseThrow(()->new RuntimeException("Not Found"));
        LocalDate startDate = LocalDate.now();
        var chargesyear=user.getAdoptcharges().getYear();
        LocalDate endDate = startDate.plusYears(Long.parseLong(chargesyear));
        user.setStartdate(String.valueOf(startDate));
        user.setEndtdate(String.valueOf(endDate));
        user.setStatus("Approved");
        adoptionsRepo.save(user);
        return new ResponseEntity<>("Approved Successfully",HttpStatus.OK);
    }
}
