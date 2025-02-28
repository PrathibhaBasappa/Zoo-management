package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Adoptcharges;
import com.Zoomanagement_backend.Entity.Animals;
import com.Zoomanagement_backend.Repository.AdoptchargesRepo;
import com.Zoomanagement_backend.Repository.AnimalsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AdoptchargesController {

    @Autowired
    private AnimalsRepo animalsRepo;
    @Autowired
    private AdoptchargesRepo adoptchargesRepo;

    @PostMapping("/AddAnimalscharges/{aid}")
    public ResponseEntity<?> AddAnimals(@RequestBody Adoptcharges obj,  @PathVariable Integer aid)
    {
        var animals=animalsRepo.findById(aid).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setAcharges(animals);

        adoptchargesRepo.save(obj);
        return new ResponseEntity<>("Animal Adopted Charges Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/getadoptescharges")
    public ResponseEntity<?> getadoptescharges()
    {
        var data=adoptchargesRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/getadopteschargesbyanimalid/{aid}")
    public ResponseEntity<?> getadopteschargesbyanimalid(@PathVariable Integer aid)
    {
        var data=adoptchargesRepo.findByAchargesAid(aid);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
