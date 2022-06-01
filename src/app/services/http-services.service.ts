import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private REST_API_SERVER=" http://localhost:3000";
  // private REST_API_SERVER="https://randomuser.me/api?results=";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      // 'Authorization':'my-auth-token'
    })
  };

  constructor(private httpClient:HttpClient) { }

  public getComments(): Observable<any>{

    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getUser(users: number =1): Observable<any>{
    const url = `${this.REST_API_SERVER}`+users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  
  public postComment(payload:any): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}
