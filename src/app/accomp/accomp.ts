import { Component, HostListener, inject, signal } from '@angular/core';
import { ApiService } from '../api-service';
import { AccompClass } from '../accomp-class';

import {  MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-accomp',
  imports: [MatExpansionModule, MatTabsModule],
  templateUrl: './accomp.html',
  styleUrl: './accomp.css'
})
export class Accomp {
 private apiservice = inject(ApiService)

projects = signal<AccompClass[]>([]);

educations = signal<AccompClass[]>([]);

jobs = signal<AccompClass[]>([]);


ngOnInit(): void {
  this.apiservice.getByType("Projet personnel").subscribe({
    next: (accomps : AccompClass[]) => {
      this.projects.set(accomps)
    },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des accomps : " + error.message);
      }
  })

    this.apiservice.getByType("Éducation").subscribe({
    next: (accomps : AccompClass[]) => {
      this.educations.set(accomps)
    },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des accomps : " + error.message);
      }
  })

     this.apiservice.getByType("Expérience de travail").subscribe({
    next: (accomps : AccompClass[]) => {
      this.jobs.set(accomps)
    },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des accomps : " + error.message);
      }
  })
}


isMobile: boolean = false;

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 906; 
  }

}

