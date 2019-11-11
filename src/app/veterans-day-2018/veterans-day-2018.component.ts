import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterans-day-2018',
  templateUrl: './veterans-day-2018.component.html',
  styleUrls: ['./veterans-day-2018.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class VeteransDay2018Component implements OnInit {

  constructor(private router: Router) {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-0']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }
  stationName = "SoCalTelevision"
  title = "Veterans Day 2019"
  url = "https://www.socaltelevision.com/+#+/veterans-day"
  description = "2019 VETERANS DAY FREE MEALS, DISCOUNTS & CELEBRATIONS"

// Social Sharing binding data
header_link = "Special Spots"
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
