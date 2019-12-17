import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data : any = {};
  public showPunchline : Boolean = false;
  private _http : HttpService;

  constructor(httpService : HttpService) {
    this._http = httpService;
  }

  ngOnInit() {
    this._http.getPizza();
    this.showAnotherJoke();
  }

  toggleJokeVisibility() : void {
    this.showPunchline = !this.showPunchline;
  }

  showAnotherJoke() {
    let jokeObservable : Observable<any> = this._http.getJoke();
    jokeObservable.subscribe(res => {
      this.showPunchline = false;
      this.data = res;
    });
  }

  sendJoke() {
    let jokeObservable : Observable<any> = this._http.postJoke("I am coming from the front end");
    jokeObservable.subscribe(res => {
      console.log(res);
    });
  }

}
