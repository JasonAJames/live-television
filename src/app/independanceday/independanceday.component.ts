import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-independanceday',
  templateUrl: './independanceday.component.html',
  styleUrls: ['./independanceday.component.css']
})
export class IndependancedayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE COVERAGE"
  subdesc = "The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Wednesday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street."
  paradeinfo = `
  FOURTH OF JULY IN CORONA PARADE INFORMATION:<br/>
The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Wednesday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street. Parade entries will line-up on Ontario Avenue, Main Street and Pueblo Road. 
<br/><br/>
ROAD CLOSURES
<br/>
The following streets will be posted “No Parking” and closed to through traffic from approximately 6:30 a.m. to 12 p.m. on Wednesday, July 4, 2018:
<br/>
Main Street between Ontario Avenue and Grand Boulevard<br/>
Chatam Circle from the cul-de-sac to Summerset<br/>
Pueblo Road between Main Street and Belle Avenue<br/>
Olive Street between Main Street and Belle Avenue<br/>
Olive Street between Main Street and South Victoria Avenue<br/>
Please anticipate increased traffic congestion in the area on July 4.<br/>
<br/>
SANTANA PARK FOOD FESTIVAL &amp; FIREWORKS<br/>
The fun will continue at Santana Park beginning at 5 p.m. with live music and food vendors.<br/>
<br/>
ENTERTAINMENT<br/>
The entertainment begins at 5 p.m. with Kids Rock Free School of Music. The young group has performed at numerous events around Southern California and received rave reviews for their shows.<br/>

Returning to the Independence Day stage is Corona’s own – Yard Sale! Yard Sale is an 8-piece, high-energy, horn-driven, powerhouse band that covers all the best dance hits from the 70’s through today. Yard Sale has been a regular on the Downtown Disney stage since 2013 and has played over 70 summer concert series events and countless private/corporate functions throughout Southern California. The camaraderie and energy on stage is contagious, and they’ll keep the dance floor full!<br/>
<br/>
FIREWORKS<br/>
The celebration concludes with the eagerly anticipated firework show to occur at sundown.<br/>
<br/>
PARKING<br/>

Santana Parking Lot- $5 parking fee for up-close parking spots<br/>
Free parking at Crossroads Christian Church and School and Lee Pollard High School<br/><br/>
NOTICE<br/><br/>

No Dogs or pets allowed at the park<br/>
No gas/propane BBQs (Charcoal only)<br/>
No alcohol or cigarettes (including vaping) allowed in the park<br/>
No drones<br/><br/>
ROAD CLOSURES<br/>
<br/>
Ontario Ave from Magnolia to Fullerton<br/>
Magnolia from Main Street to Ontario<br/>
Kellogg from Kingfisher to Pimpernel<br/>
Fullerton from Old Temescal Canyon to McMackin<br/>
Santana from Magnolia to Hidden Creek<br/>
Garretson from CL Fleming to Santana<br/>
Twinleaf from Lacey Oak to Santana<br/>
Please anticipate increased traffic congestion in the area on July 4. <br/><br/>

Closures are scheduled to begin at 11 a.m. and all closures are expected to be in place by 5 p.m. but all closures are subject to closure at any time.<br/>
<br/>
No one will be allowed through any street closure for safety reasons.<br/>
  `

  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

}
