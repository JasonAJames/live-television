import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css', '../../app.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "We ar Currently OFFLINE - Please check back later. In the mean time, you can watch live tv from around the nation by clicking on the TV Stations navigation link"


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
}
