import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-1',
  templateUrl: './home-video-1.component.html',
  styleUrls: ['./home-video-1.component.css', '../../../assets/css/social-share.css']
})
export class HomeVideo1Component implements OnInit {

  constructor(private router: Router) {}

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
  title = "26TH ANNUAL FESTIVAL OF LIGHTS SWITCH-ON CEREMONY"
  header_link = "Mission Inn Festival of Lights"
  url = "https://www.socaltelevision.com/+#+/mission-inn-festival-of-lights"
  description = "Join us on Friday, November 23rd at 4:30PM as we officially kick off the holiday season with our 26th Annual Festival of Lights celebration!"
  subdescription = "You're not going to want to miss this very special anniversary celebration featuring guests like Robin Thicke!! If you can't make it to the celebration, We've got you covered. Watch the Switch On Ceremony #LIVE on www.SoCalTelevision.com"


}
