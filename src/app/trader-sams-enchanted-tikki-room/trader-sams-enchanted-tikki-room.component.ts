import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-trader-sams-enchanted-tikki-room',
  templateUrl: './trader-sams-enchanted-tikki-room.component.html',
  styleUrls: ['./trader-sams-enchanted-tikki-room.component.css', '../../../assets/css/social-share.css']
})
export class TraderSamsEnchantedTikkiRoomComponent implements OnInit {

  constructor(private router: Router) {
    ga('set', 'page', '/downtown-disney/trader-sams');
    ga('send', 'pageview');
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

  stationName = 'SoCal Television'
  title = "Special Spots"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/downtown-disney/trader-sams"
  description = 'Downtown Disney Trader Sams Enchanted Tikki Room';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
