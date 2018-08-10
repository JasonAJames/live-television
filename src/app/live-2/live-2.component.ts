import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-2',
  templateUrl: './live-2.component.html',
  styleUrls: ['./live-2.component.css']
})
export class Live2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE BREAKING NEWS"
  subdesc = `The City of Corona, the Corona Fire Department and the Corona Police Department are ready with contingency plans if the #HolyFire continues into our City.

  For those who live in the neighborhoods south of Upper and Masters on the U.S. Forest Service - Cleveland National Forest side, we encourage you to be prepared for possible evacuations by having a go-bag ready and by signing up for our Emergency Notification System.
  
  Learn more on how to prepare your home and your go-bag at www.ReadyForWildfire.org
  
  Sign up for our Emergency Notification System at www.CoronaCA.gov/ENS`


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
