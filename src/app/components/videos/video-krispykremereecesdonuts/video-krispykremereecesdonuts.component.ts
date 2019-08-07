import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-krispykremereecesdonuts',
  templateUrl: './video-krispykremereecesdonuts.component.html',
  styleUrls: ['./video-krispykremereecesdonuts.component.css']
})
export class VideoKrispykremereecesdonutsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['stations-main']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }
}
