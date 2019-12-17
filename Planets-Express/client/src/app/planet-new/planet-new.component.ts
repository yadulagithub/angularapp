import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-planet-new',
  templateUrl: './planet-new.component.html',
  styleUrls: ['./planet-new.component.css']
})
export class PlanetNewComponent implements OnInit {

  private _httpService : HttpService;
  private _router : Router;
  public newPlanet: any = {};
  public errors: any = {};

  constructor(_httpService : HttpService, router: Router) {
    this._httpService = _httpService;
    this._router = router;
  }

  addPlanet() {
    console.log(this.newPlanet);
    let planetObservable : Observable<any> = this._httpService.createPlanet(this.newPlanet);
    planetObservable.subscribe( res => {
      if(res.errors) {
        this.errors = res.errors;
      } else {
        this._router.navigate(['/']);
      }
    });
    return false;
  }

  ngOnInit() {
  }

}
