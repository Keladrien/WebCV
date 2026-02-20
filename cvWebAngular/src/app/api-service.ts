import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccompClass } from './accomp-class';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private http = inject(HttpClient)

  private apiurl = "http://localhost:8080/"


  public getHello(): Observable<string> {
    return this.http.get(
      `${this.apiurl}`,
      {responseType: "text" }
    )
  }

  public getAccomp(): Observable<AccompClass[]> {
    return this.http.get<AccompClass[]>(
      `${this.apiurl}accomplissement`
    );
  }
  
}
