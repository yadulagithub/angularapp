import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
    this._httpClient = httpClient;
  }

  getAll(): Observable<any> {
    return this._httpClient.get("/cakes");
  } 

  create(newCake): Observable<any> {
    return this._httpClient.post("/cakes", newCake);
  }

  review(_id: string, review: any): Observable<any> {
    return this._httpClient.post(`/review/${_id}`, review);
  }

}