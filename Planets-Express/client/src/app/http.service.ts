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

  getPlanets() : Observable<any> {
    return this._http.get("/planets");
  }

  getOnePlanet(_id) {
    return this._http.get(`/planets/${_id}`);
  }

  createPlanet(planetData: any) : Observable<any> {
    return this._http.post("/planets", planetData);
  }

  updatePlanet(_id, planetData) {
    return this._http.put(`/planets/${_id}`, planetData);
  }

}
