import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocautoshow2019',
  templateUrl: './ocautoshow2019.component.html',
  styleUrls: ['./ocautoshow2019.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class Ocautoshow2019Component implements OnInit {

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

  stationName = "OC Auto Show 2019"
  description = "OC Auto Show 2019"
  subdescription = "2019 OC Auto Show October 3, 2019 - October 6, 2019 at the Anaheim Convention Center"

  // Social Sharing binding data
  title = "OC Auto Show 2019"
  header_link = "OC Auto Show 2019"
  url = "https://www.socaltelevision.com/+#+/ocautoshow2019"
  summary = this.subdescription
  source_url = this.url
  subject = this.header_link
  body = this.subdescription

}
