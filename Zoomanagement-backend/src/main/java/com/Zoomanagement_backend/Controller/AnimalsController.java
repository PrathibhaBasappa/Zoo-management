package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Animals;
import com.Zoomanagement_backend.Repository.AnimalsRepo;
import com.Zoomanagement_backend.Repository.InchargeRepo;
import com.Zoomanagement_backend.Repository.TypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AnimalsController {

    @Autowired
    private InchargeRepo inchargeRepo;

    @Autowired
    private TypeRepo typeRepo;
    @Autowired
    private AnimalsRepo animalsRepo;

    @PostMapping("/AddAnimals/{Iid}/{tid}")
    public ResponseEntity<?> AddAnimals(@RequestBody Animals obj, @PathVariable Integer Iid,@PathVariable Integer tid)
    {
        var incharge=inchargeRepo.findById(Iid).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setIncharge(incharge);
        var type=typeRepo.findById(tid).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setType(type);
        animalsRepo.save(obj);
        return new ResponseEntity<>("Animal Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetAnimals")
    public ResponseEntity<?> GetAnimals()
    {
        var data=animalsRepo.findAll();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsbytype/{tid}")
    public ResponseEntity<?> GetAnimalsbytype(@PathVariable Integer tid)
    {
        var data=animalsRepo.findByTypeTid(tid);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/GetAnimalsbyiemail/{iemail}")
    public ResponseEntity<?> GetAnimalsbytype(@PathVariable String iemail)
    {
        var data=animalsRepo.findByInchargeEmail(iemail);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @PutMapping("/UpdateAnimalsdetails")
    public ResponseEntity<?> UpdateAnimalsdetails(@RequestBody Animals obj)
    {
        var animal=animalsRepo.findById(obj.getAid()).orElseThrow(()->new RuntimeException("Not found"));
        animal.setName(obj.getName());
        animal.setAge(obj.getAge());
        animal.setDate(obj.getDate());
        animal.setGender(obj.getGender());
        animal.setImage(obj.getImage());
        animalsRepo.save(animal);
        return new ResponseEntity<>("Animal Updated Successfully",HttpStatus.OK);
    }

}
