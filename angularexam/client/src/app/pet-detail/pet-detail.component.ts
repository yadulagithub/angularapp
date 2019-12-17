import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public error2s: any = {};
  public onePet : any = {};
  public _counter : CounterService;
  public disabled : boolean = false;

  constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const petObservable : Observable<any> = this._httpService.getOnePet(params['_id']);
      petObservable.subscribe( res => this.onePet = res );
    });
  }

  getPet(_id) {
    let observable = this._httpService.updatePet(_id, this.onePet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }

  delPet(_id) {
    let observable = this._httpService.deletePet(_id, this.onePet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }
 
  getPet2(_id) {
    let observable = this._httpService.updatePet(_id, this.onePet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } 
    });
  }


  public getCount() {
    return this._counter.count;
  }
  public incCount(event: any, _id){
    this.onePet.likes += 1;
    console.log('Counter ' + this.onePet.likes);
    console.log('Event ' + event);
    console.log(_id);
    event.target.disabled = true;
    this.disabled = true;
    this.getPet2(_id) ;


    return false;
    
  }

  public disableBtn(){
    this.disabled = true;
  }

  
}

