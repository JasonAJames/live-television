import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-home-video-2',
  templateUrl: './home-video-2.component.html',
  styleUrls: ['./home-video-2.component.css', '../../../assets/css/social-share.css']
})
export class HomeVideo2Component implements OnInit {

  constructor(private router: Router) {
    ga('set', 'page', '/home-video-2');
    ga('send', 'pageview');
  }

  

  videoEnd() {
    // do init at here for current route.

   // this.router

    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-0']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television';
  description = 'The SBD Fest';
  subdescription = 'The Sky Thunders over San Bernardino, CA';
}
