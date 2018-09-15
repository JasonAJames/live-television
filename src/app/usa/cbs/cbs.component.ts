import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbs',
  templateUrl: './cbs.component.html',
  styleUrls: ['./cbs.component.css']
})
export class CbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "CBS"
  description = "CBS (an initialism of the network's former name, the Columbia Broadcasting System) is an American commercial broadcast television network that is a flagship property of CBS Corporation. The company is headquartered at the CBS Building in New York City with major production facilities and operations in New York City (at the CBS Broadcast Center) and Los Angeles (at CBS Television City and the CBS Studio Center)."
}
