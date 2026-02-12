package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Accomp implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String type;
    private String acc_Name;
    private String date;
    private String useTech;
    private String repoGitHub;
    private String description;

    public Accomp() {

    }

    public Accomp(String type, String acc_Name, String date, String useTech, String repoGitHub, String description) {

        
        this.type = type;
        this.acc_Name = acc_Name;
        this.date = date;
        this.useTech = useTech;
        this.repoGitHub = repoGitHub;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getAcc_Name() {
        return acc_Name;
    }

    public String getDate() {
        return date;
    }

    public String getUseTech() {
        return useTech;
    }

    public String getDescription() {
        return description;
    }

    public String getRepo() {
        return repoGitHub;
    }
}
