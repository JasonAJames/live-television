import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox11la',
  templateUrl: './fox11la.component.html',
  styleUrls: ['./fox11la.component.css', '../../../app.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class Fox11laComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'FOX11 LA';

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Fox 11 LA"
  url = "https://www.socaltelevision.com/#/fox11la"
  description = 'Fox 11 LA';
  subdescription = `In 1986, Australian newspaper publisher Rupert Murdoch and his company, 
  the News Corporation (which had acquired a controlling ownership interest in the 20th Century Fox 
    film studio the year before), purchased KTTV and the other Metromedia television stations.`
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
