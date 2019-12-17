import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public error2s: any = {};
  public onePet : any = {};

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

  updatePet(_id) {
    let observable = this._httpService.updatePet(_id, this.onePet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}

