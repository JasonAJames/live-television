import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-ocautoshow2019',
  templateUrl: './video-ocautoshow2019.component.html',
  styleUrls: ['./video-ocautoshow2019.component.css']
})
export class VideoOcautoshow2019Component implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit() {
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

}
