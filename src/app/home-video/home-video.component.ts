import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css','../components/social-share-icons/social-share-icons.component.css']
})


export class HomeVideoComponent implements OnInit {

  constructor(private router: Router) {}

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-0']);
      console.log('Should have redirected by now.');
  }, 1000);  //1s
  }

  ngOnInit() {

}

}
