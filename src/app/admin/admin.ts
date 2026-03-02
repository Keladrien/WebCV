import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule, MatCardModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  private router = inject(Router);


  private hardUser = {
    user: 'admin',
    password: '1234'
  };

  loginForm = new FormGroup({
    user: new FormControl(""),
    password: new FormControl("")
  });

  handleSubmit() {

    const username = this.loginForm.value.user;
    const password = this.loginForm.value.password;

    if (
      username === this.hardUser.user &&
      password === this.hardUser.password
    ) {


      sessionStorage.setItem('user', JSON.stringify(this.hardUser));


      this.router.navigate(['/panel']);

    } else {
      alert("Mauvais identifiant");
    }
  }
}