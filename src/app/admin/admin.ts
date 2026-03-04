import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { userClass } from '../user-class';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule, MatCardModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  private router = inject(Router);

  private api = inject(ApiService);

  newLogin : userClass = {
    username : "",
    password: ""
  }


  loginForm = new FormGroup({
    user: new FormControl(""),
    password: new FormControl("")
  });

 


  handleSubmit() {
  const username = this.loginForm.get('user')?.value;
  const password = this.loginForm.get('password')?.value;

  if (username && password) {
    this.api.login({
      username: username,
      password: password
    }).subscribe({
      next: (res: boolean) => {

        if (res) {
          console.log("Login réussi");
          sessionStorage.setItem('connected', "connected")

        this.router.navigate(['/panel']);

        } else {
          console.log("Mauvais identifiants");
        }
      },
      error: (err) => {
        console.error("Erreur :", err);
      }
    });
  }
}
}