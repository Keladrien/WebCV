import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../api-service';
import { AccompClass } from '../accomp-class';
import { CommonModule } from '@angular/common';
import {  MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-accomp',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './accomp.html',
  styleUrl: './accomp.css',
})
export class Accomp {
 private apiservice = inject(ApiService)

apiData = signal<AccompClass[]>([]) ;



ngOnInit(): void {
  this.apiservice.getAccomp().subscribe({
    next: (accomps : AccompClass[]) => {
      this.apiData.set(accomps)
    },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des accomps : " + error.message);
      }
  })
}





}

