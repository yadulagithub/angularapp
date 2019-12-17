import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  postTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.post('/tasks', body: any);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("post our tasks!", data));
  }

  putTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.put('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("put our tasks!", data));
  }

  deleteTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.delete('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("delete our tasks!", data));
  }
}


