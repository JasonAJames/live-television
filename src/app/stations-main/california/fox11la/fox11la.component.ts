import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox11la',
  templateUrl: './fox11la.component.html',
  styleUrls: ['./fox11la.component.css', '../../../app.component.css']
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
    film studio the year before), purchased KTTV and the other Metromedia television stations. 
    The Metromedia stations ended up becoming part of a new holding company formed by News Corporation 
    called Fox Television Stations; those stations formed the basis for the new Fox Broadcasting Company 
    television network, which made its debut on October 9, 1986. Following the News Corporation purchase, 
    KTTV added more first-run syndicated talk, court and reality shows. By the early 1990s, it began to 
    run afternoon cartoons from the network's Fox Kids block (which debuted in 1990), as well as 
    top-rated off-network sitcoms during the evening hours. KTTV removed cartoons on weekday mornings in 
    June 1993, due to the launch of the morning newscast Good Day L.A.`
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
