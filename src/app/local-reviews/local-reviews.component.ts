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
  reviewPath = "www.google.com"
}
