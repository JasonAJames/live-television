import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route : ActivatedRoute) {}

  ngOnInit() {
  }

stationName = 'SoCal Television';
description = 'LIVE at the OC FAIR';
subdescription = 'Join SoCalTelevision LIVE at the OC FAIR! July 13-Aug. 12';
}
