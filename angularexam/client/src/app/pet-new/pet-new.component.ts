import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {

  private _httpService : HttpService;
  private _router : Router;
  public newPet: any = {};
  public errors: any = {};
  
  //public newSkill: any = {};

  constructor(_httpService : HttpService, router: Router) {
    this._httpService = _httpService;
    this._router = router;
  }

  addPet() {
    console.log(this.newPet);
    let petObservable : Observable<any> = this._httpService.createPet(this.newPet);
    petObservable.subscribe( res => {
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

