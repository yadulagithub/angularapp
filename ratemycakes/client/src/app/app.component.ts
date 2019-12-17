
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public newCake: any = {};
  public cakes: any = [];
  public review: any = {rating: 3};
  private _http : HttpService;

  constructor(httpService: HttpService) {
    this._http = httpService;
  }

  ngOnInit() {
    const likeComment: Observable<any> = this._http.getAll();
    likeComment.subscribe( res => {
      this.cakes = res.reverse();
      this.cakes.forEach(c => {
        c.isReviewing = false
      });
    });
  }

  getBaked() {
    const cakeservable: Observable<any> = this._http.create(this.newCake);
    cakeservable.subscribe( res => {
      console.log(res);
      this.ngOnInit();
      this.newCake = {};
    });
  }

  fileUpload(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.newCake.image = reader.result;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  toggleReviewForm(i) {
    this.cakes.forEach(c => {
      c.isReviewing = false
    });
    this.cakes[i].isReviewing = true;
  }

  leaveReview(_id) {
    const likeComment: Observable<any> = this._http.review(_id, this.review);
    likeComment.subscribe( res => {
      console.log(res);
      this.review = {};
      this.cakes.forEach(c => {
        c.isReviewing = false
      });
      this.ngOnInit();
    });
  }

}