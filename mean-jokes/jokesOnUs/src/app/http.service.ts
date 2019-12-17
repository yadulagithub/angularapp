import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 
    this._httpClient = httpClient;
  }

  getJoke() : Observable<any> {
    // return this._httpClient.get("https://official-joke-api.appspot.com/random_joke");
    return this._httpClient.get("/jokes");
  }

  postJoke(joke: string) : Observable<any> {
    return this._httpClient.post("/jokes", {joke});
  }

  getPizza() : void {
    console.log("Pizza gotten!");
  }

}
