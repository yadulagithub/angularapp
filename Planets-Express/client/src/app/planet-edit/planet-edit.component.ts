import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-edit',
  templateUrl: './planet-edit.component.html',
  styleUrls: ['./planet-edit.component.css']
})
export class PlanetEditComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public error2s: any = {};
  public onePlanet : any = {};

  constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const planetObservable : Observable<any> = this._httpService.getOnePlanet(params['_id']);
      planetObservable.subscribe( res => this.onePlanet = res );
    });
  }

  updatePlanet(_id) {
    let observable = this._httpService.updatePlanet(_id, this.onePlanet);
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
