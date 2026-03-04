import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccompClass } from './accomp-class';
import { userClass } from './user-class';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private http = inject(HttpClient)

  private apiurl = "http://localhost:8080/"

 
public login(user: userClass){
  return this.http.post<boolean>(
    `${this.apiurl}login`,
    user
  );
}

public getById(id: number) {
  return this.http.get<AccompClass>(
    `${this.apiurl}accomplissement/${id}`
  );
}

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

  public getByType(type:string) {
    return this.http.get<AccompClass[]>(
      `${this.apiurl}accomplissement/type/${type}`
    );
  }

  public addAccomp(accomp: AccompClass) {
  return this.http.post(
    `${this.apiurl}add`,
    accomp
  );
}

public delAccomp(id:number | undefined) {
  return this.http.delete(
    `${this.apiurl}delAccomp/${id}`
  )
}

public updateAccomp(id:number | undefined, accomp: AccompClass) {
  return this.http.put(
    `${this.apiurl}modify/${id}`,
    accomp
  )
}

}
