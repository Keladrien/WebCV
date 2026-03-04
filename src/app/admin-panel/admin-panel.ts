import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AccompClass } from '../accomp-class';
import { ApiService } from '../api-service';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-admin-panel',
  imports: [MatCardModule, FormsModule, MatTabsModule, MatGridListModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanel {

  private api = inject(ApiService);

  apiData = signal<AccompClass[]>([]) ;

  selectedData = signal<AccompClass[]>([])

  newAccomp: AccompClass = {
  type: "",
  acc_Name: "",
  date: "",
  useTech: "",
  description: "",
  repoGitHub: "",
  imgLink: "",
  }

loadSelectedAccomp() {
  if (!this.projectToModify.id) return;

  this.api.getById(this.projectToModify.id).subscribe({
    next: (accomp: AccompClass) => {
      this.projectToModify = accomp;
    },
    error: (error: any) => {
      console.error("Erreur récupération :", error.message);
    }
  });
}

handleUpdate() {
  if (!this.projectToModify.id) {
    alert("Aucun projet sélectionné");
    return;
  }

  this.api.updateAccomp(this.projectToModify.id, this.projectToModify)
    .subscribe({
      next: () => {
        alert("Modification réussie !");
        this.loadAccomp();
          this.projectToModify = {
              id: 0,
              type: "",
              acc_Name: "",
              date: "",
              useTech: "",
              description: "",
              repoGitHub: "",
              imgLink: "",
            };
      },
      error: (err) => {
        console.error(err);
      }
    });
}

  projectToModify: AccompClass = {
  id: 0,
  type: "",
  acc_Name: "",
  date: "",
  useTech: "",
  description: "",
  repoGitHub: "",
  imgLink: "",
  }




  handleSubmit() {
if (this.newAccomp.type === "Éducation" || this.newAccomp.type === "Expérience de travail" ) {
  this.newAccomp.useTech = "n/a";
  this.newAccomp.repoGitHub = "n/a";
  this.newAccomp.imgLink = "n/a"
}

if (this.newAccomp.acc_Name === "" 
  || this.newAccomp.date === "" 
  || this.newAccomp.description === "" 
  || this.newAccomp.repoGitHub === "" 
  || this.newAccomp.type === "" 
  || this.newAccomp.useTech === "") {
return alert("Formulaire non remplis")
} else {
  this.api.addAccomp(this.newAccomp).subscribe({
      next: () => {
        alert("Ajout réussi !");
        this.loadAccomp()
           this.newAccomp = {
              type: "",
              acc_Name: "",
              date: "",
              useTech: "",
              description: "",
              repoGitHub: "",
              imgLink: "",
            };
      },
      error: (err) => {
        console.error(err);
      }
    });
} 
}

loadAccomp() {
  this.api.getAccomp().subscribe(data => {
    this.apiData.set(data);
  })
}


handleDelete(id: number | undefined) {
  this.api.delAccomp(id).subscribe({
    next: () => {
      alert("Supprimé avec succes")
      this.loadAccomp()
    },
    error: (err) => {
      console.error(err);
    }
  })
}

ngOnInit(): void {
  this.api.getAccomp().subscribe({
    next: (accomps : AccompClass[]) => {
      this.apiData.set(accomps)
    },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des accomps : " + error.message);
      }
  })
}

}
