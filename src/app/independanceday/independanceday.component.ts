import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-independanceday',
  templateUrl: './independanceday.component.html',
  styleUrls: ['./independanceday.component.css']
})
export class IndependancedayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE COVERAGE"
  subdesc = "The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Wednesday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street."


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

}
