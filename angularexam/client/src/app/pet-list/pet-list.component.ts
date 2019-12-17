import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  private _httpService : HttpService;
  public pets : Array<any> = [];

  constructor(_httpService : HttpService) {
    this._httpService = _httpService;
  }
  
  ngOnInit() {
    const observable : Observable<any> = this._httpService.getPets();
    observable.subscribe( res => {
      this.pets = res.reverse();
    });
  }

}