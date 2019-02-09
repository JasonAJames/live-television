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
  title = "Salvation Mountain"
  header_link = "Salvation Mountain"
  url = "https://www.socaltelevision.com/+#+/home-video-1"
  description = "Join us at Leonard Knight's Salvation Mountain."
  subdescription = "Leonard Knight's Salvation Mountain. Salvation Mountain is located in the lower desert of Southern California in Imperial County just east of the Salton Sea and about a hour and a half from Palm Springs. Salvation Mountain is Leonard's tribute to God and his gift to the world with its simple yet powerful message: 'God Is Love.' Leonard's passion has lovingly created this brilliant 'outsider art' masterpiece resplendent with not only biblical and religious scripture such as the Lord's Prayer, John 3:16, and the Sinner's Prayer, but also including flowers, trees, waterfalls, suns, bluebirds, and many other fascinating and colorful objects. Salvation Mountain must be seen to be fully appreciated as those who have made the journey will attest. Its 50 foot height and 150 foot breadth is made totally of local adobe clay and donated paint and is truly unique in the United States and probably the world... #LIVE on www.SoCalTelevision.com"


}
