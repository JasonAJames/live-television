import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-day',
  templateUrl: './dog-day.component.html',
  styleUrls: ['./dog-day.component.css']
})
export class DogDayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nationalday = "Dog";
}
