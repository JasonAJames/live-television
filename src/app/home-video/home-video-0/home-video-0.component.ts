import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-0',
  templateUrl: './home-video-0.component.html',
  styleUrls: ['./home-video-0.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class HomeVideo0Component implements OnInit {

  constructor(private router: Router) {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-1']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = "Glen Ivy Hot Springs"
  description = "Glen Ivy Hot Springs"
  subdescription = "Located in Corona, Glen Ivy Hot Springs is open daily, offering a relaxing and rejuvenating experience for all! Visit www.GlenIvy.com to startyour relaxation time today!"

  // Social Sharing binding data
  title = "Glen Ivy Hot Springs"
  header_link = "Glen Ivy Hot Springs"
  url = "https://www.socaltelevision.com/+#+/home-video-0"
  summary = this.subdescription
  source_url = this.url
  subject = this.header_link
  body = this.subdescription
}
