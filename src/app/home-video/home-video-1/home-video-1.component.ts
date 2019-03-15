import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-home-video-1',
  templateUrl: './home-video-1.component.html',
  styleUrls: ['./home-video-1.component.css', '../../../assets/css/social-share.css']
})
export class HomeVideo1Component implements OnInit {

  constructor(private router: Router) {
    ga('set', 'page', '/home-video-1');
    ga('send', 'pageview');
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-2']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = "SoCalTelevision"
  title = "Super Bloom 2019"
  header_link = "Super Bloom"
  url = "https://www.socaltelevision.com/+#+/home-video-1"
  description = "Have you seen the #SuperBloom2019?"
  subdescription = "SoCalTelevision.com visits the Flower Fields of the Inland Empire. Come along with us as we hike Walker Canyon off Lake Street and the 15 freeway... To Check Out The #SuperBloom2019! For more... #LIKE #FOLLOW #SHARE #SUBSCRIBE to SoCalTelevision on Instagram, Facebook, Twitter & YouTube, and watch www.SoCalTelevision.com - As Always Thank You for your continued viewership & support!"


}
