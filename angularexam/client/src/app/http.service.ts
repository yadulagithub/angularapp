import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _http : HttpClient;

  constructor(_http : HttpClient) {
    this._http = _http;
  }

  getPets() : Observable<any> {
    return this._http.get("/pets");
  }

  getOnePet(_id) {
    return this._http.get(`/pets/${_id}`);
  }

  createPet(petData: any) : Observable<any> {
    return this._http.post("/pets", petData);
  }

  updatePet(_id, petData) {
    return this._http.put(`/pets/${_id}`, petData);
  }

  deletePet(_id, petData) {
    return this._http.delete(`/pets/${_id}`, petData);
  }

  

}

