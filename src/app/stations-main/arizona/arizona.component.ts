import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.css']
})
export class ArizonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Arizona"
  stationName1 = "FOX10 - Phoenix"
  stationLink1 = "fox10-phoenix"
}
