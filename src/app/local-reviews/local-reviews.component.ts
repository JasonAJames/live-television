import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reviews',
  templateUrl: './local-reviews.component.html',
  styleUrls: ['./local-reviews.component.css']
})
export class LocalReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "SoCal Reviews"
  reviewPath = "//www.google.com/maps/contrib/102030280377814322093/photos/@33.9156664,-117.5619134,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1"
}
