package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Accomp;
import com.example.demo.repo.AccompRepo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {

    private final AccompRepo accompRepo;

    public Controller(AccompRepo accompRepo) {
        this.accompRepo = accompRepo;
    }

    @GetMapping("/")
    public String sayHello() {
        return "Hello World";
    }

    @GetMapping("/accomplissement")
    public List<Accomp> getAllAccomplissements() {
        return accompRepo.findAll();
    }

    @PostMapping("/add")
    public void add(@RequestBody Accomp accomp) {
        accompRepo.save(accomp);
    }

    @DeleteMapping("/delAccomp/{id}")
    public ResponseEntity<Void> delAccomp(@PathVariable Long id) {
        accompRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/tech/{tech}")
    public List<Accomp> getByTech(@PathVariable String tech) {
        return accompRepo.findByUseTech(tech);
    }

}
