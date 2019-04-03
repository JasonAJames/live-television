import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-downtown-disney-ballast-point',
  templateUrl: './downtown-disney-ballast-point.component.html',
  styleUrls: ['./downtown-disney-ballast-point.component.css', '../../assets/css/social-share.css']
})
export class DowntownDisneyBallastPointComponent implements OnInit {

  constructor(private router: Router) {
    ga('set', 'page', '/downtown-disney/ballast-point');
    ga('send', 'pageview');
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['downtown-disney/trader-sams']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television'
  title = "Special Spots"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/downtown-disney/ballast-point-brewery"
  description = 'Downtown Disney Ballast Point Brewery'
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
