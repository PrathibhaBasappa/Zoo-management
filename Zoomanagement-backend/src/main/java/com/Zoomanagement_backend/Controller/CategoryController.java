package com.Zoomanagement_backend.Controller;

import com.Zoomanagement_backend.Entity.Category;
import com.Zoomanagement_backend.Repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryRepo categoryRepo;

    @PostMapping("/Addcategory")
    public ResponseEntity<?> Addcategory(@RequestBody Category obj)
    {
        categoryRepo.save(obj);
        return new ResponseEntity<>("Category Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/GetCategory")
    public ResponseEntity<?> GetCategory()
    {
        var cat=categoryRepo.findAll();
        return new ResponseEntity<>(cat,HttpStatus.OK);
    }

}
