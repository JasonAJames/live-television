import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-3-abc-palmsprings',
  templateUrl: './news-3-abc-palmsprings.component.html',
  styleUrls: ['./news-3-abc-palmsprings.component.css','../../../components/social-share-icons/social-share-icons.component.css']
})
export class News3AbcPalmspringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "News 3 ABC Palm Springs"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com"
  description = 'News 3 ABC Palm Springs';
  subdescription = `The station signed went on the air on October 5, 1968 as KPLM-TV (named for the Palm as in "Palm Springs") 
  on UHF channel 42 and was the market's first station. It was originally owned by Pacific Media Corporation. However, it would 
  hold the distinction of being the only station in the Coachella Valley for just three weeks, as NBC affiliate KMIR-TV started 
  up at that time on channel 36. It first operated from studios located on East Palm Canyon Drive in Palm Springs. Pacific Media 
  sold the station to Esquire Communications in 1979, and the following year, it was renamed to KESQ-TV.`
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
