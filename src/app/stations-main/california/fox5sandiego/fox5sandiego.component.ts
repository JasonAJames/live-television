import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox5sandiego',
  templateUrl: './fox5sandiego.component.html',
  styleUrls: ['./fox5sandiego.component.css', '../../../app.component.css']
})
export class Fox5sandiegoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "FOX 5 San Diego";
}
