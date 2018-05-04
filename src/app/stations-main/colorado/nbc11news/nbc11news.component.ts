import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbc11news',
  templateUrl: './nbc11news.component.html',
  styleUrls: ['./nbc11news.component.css']
})
export class Nbc11newsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "NBC 11 News - Colorado"
  stationLink1 = "nbc11news"
}
