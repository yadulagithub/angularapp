import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  private _httpService : HttpService;
  public planets : Array<any> = [];

  constructor(_httpService : HttpService) {
    this._httpService = _httpService;
  }
  
  ngOnInit() {
    const observable : Observable<any> = this._httpService.getPlanets();
    observable.subscribe( res => {
      this.planets = res.reverse();
    });
  }

}
