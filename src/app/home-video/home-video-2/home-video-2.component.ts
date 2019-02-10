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
      this.router.navigate(['stations-main']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television';
  description = 'Come visit the Piedras Blancas Light Station with us!';
  subdescription = 'Piedras Blancas means "white rocks" in Spanish. Long before the establishment of a light station, Native Americans harvested the abundant natural resources at Point Piedras Blancas. Early mariners used the large white offshore rocks as navigational landmarks. In 1875, a light station was established at Point Piedras Blancas to aid maritime navigation. The lighthouse, with its distinct light pattern of a white flash every 15 seconds, assured mariners of their location and warned of the rocky coastline. For Tour Information, visit: https://piedrasblancas.org/tours.html';
}
