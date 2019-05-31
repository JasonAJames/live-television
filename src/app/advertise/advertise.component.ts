import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  p1 = "Advertise Statistics for the Inland Empire Television Network - SoCalTelevision.com"
  p2 = "No advertising medium has grown as fast as the Internet. More than 72% of Americans have Internet access. On the average users spend a minimum of 9.8 hours a week online. The projected number of Internet users surged to 320 million in 2003, and is well above this mark today!"
  p3 = "The SoCal Television audience is comprised of 58% Male and 42% Female ranging in age from 16 to 48. This demographic is dramatically increasing as technology advances and becomes more accessible to the general public."
  
}
