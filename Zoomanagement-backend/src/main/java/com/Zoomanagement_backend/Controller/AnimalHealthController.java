package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Animalhealth;
import com.Zoomanagement_backend.Entity.Animals;
import com.Zoomanagement_backend.Repository.AnimalhealthRepo;
import com.Zoomanagement_backend.Repository.AnimalsRepo;
import com.Zoomanagement_backend.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AnimalHealthController {
    @Autowired
    private AnimalsRepo animalsRepo;
    @Autowired
    private DoctorRepo doctorRepo;
    @Autowired
    private AnimalhealthRepo animalhealthRepo;

    @PostMapping("/Addanimalhealthdetails/{aid}/{demail}")
    public ResponseEntity<?> Addanimalhealthdetails(@RequestBody Animalhealth obj, @PathVariable int aid, @PathVariable String demail)
    {
        var listanimal = animalsRepo.findById(aid).orElseThrow(() -> new RuntimeException("Not Found"));
        obj.setAnimal(listanimal);
        var doctorss = doctorRepo.findByEmail(demail).orElseThrow(() -> new RuntimeException("Not Found"));
        obj.setDoctors(doctorss);
        animalhealthRepo.save(obj);
        return new ResponseEntity<>("Animal Health Checkup Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsheathdetails/{inchargeemail}")
    public ResponseEntity<?> GetAnimalsheathdetails(@PathVariable String inchargeemail)
    {
        var data=animalhealthRepo.findByAnimalInchargeEmail(inchargeemail);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsheathdetailsbydoctoremail/{deemail}/{aid}")
    public ResponseEntity<?> GetAnimalsheathdetailsbydoctoremail(@PathVariable String deemail,@PathVariable Integer aid)
    {
        var data=animalhealthRepo.findByDoctorsEmailAndAnimalAid(deemail,aid);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsheathdbyanima/{aid}")
    public ResponseEntity<?> GetAnimalsheathdbyanima(@PathVariable Integer aid)
    {
        var data=animalhealthRepo.findByAnimalAid(aid);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsheathdetailsbyemailandanimalid/{inchargeemail}/{aid}")
    public ResponseEntity<?> GetAnimalsheathdetailsbyemailandanimalid(@PathVariable String inchargeemail,@PathVariable Integer aid)
    {
        var data=animalhealthRepo.findByAnimalInchargeEmailAndAnimalAid(inchargeemail,aid);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }


}
