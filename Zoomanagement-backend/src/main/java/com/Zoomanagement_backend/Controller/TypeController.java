package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Category;
import com.Zoomanagement_backend.Entity.Type;
import com.Zoomanagement_backend.Repository.CategoryRepo;
import com.Zoomanagement_backend.Repository.TypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class TypeController {

    @Autowired
    private TypeRepo typeRepo;

    @Autowired
    private CategoryRepo categoryRepo;

     @PostMapping("/AddType/{catid}")
    public ResponseEntity<?> AddType(@RequestBody Type obj,@PathVariable Integer catid)
    {
        var cat=categoryRepo.findById(catid).orElseThrow(()->new RuntimeException("Not Found"));
        obj.setCategory(cat);
        typeRepo.save(obj);
        return new ResponseEntity<>(" Type Added Successfully ", HttpStatus.OK);
    }

    @GetMapping("/GetType")
    public ResponseEntity<?> GetType()
    {
        var type=typeRepo.findAll();
        return new ResponseEntity<>(type,HttpStatus.OK);
    }


}
