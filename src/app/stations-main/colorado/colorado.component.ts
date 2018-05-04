import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorado',
  templateUrl: './colorado.component.html',
  styleUrls: ['./colorado.component.css']
})
export class ColoradoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "9 News"
  stationLink1 = "colorado-9news"
  stationName2 = "NBC 11 News"
  stationLink2 = "nbc11news"
}
