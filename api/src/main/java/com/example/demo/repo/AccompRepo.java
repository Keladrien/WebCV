package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Accomp;

public interface AccompRepo extends JpaRepository<Accomp, Long> {

    List<Accomp> findByUseTech(String useTech);
}
