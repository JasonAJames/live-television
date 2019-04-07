import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-independanceday',
  templateUrl: './independanceday.component.html',
  styleUrls: ['./independanceday.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class IndependancedayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE COVERAGE"
  subdesc = "The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Wednesday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street."
  paradeinfo = `
  FOURTH OF JULY IN CORONA

  PARADE:
  The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Wednesday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street. Parade entries will line-up on Ontario Avenue, Main Street and Pueblo Road. 
  
  ROAD CLOSURES
  
  The following streets will be posted “No Parking” and closed to through traffic from approximately 6:30 a.m. to 12 p.m. on Wednesday, July 4, 2018:
  
  Main Street between Ontario Avenue and Grand Boulevard
  Chatam Circle from the cul-de-sac to Summerset
  Pueblo Road between Main Street and Belle Avenue
  Olive Street between Main Street and Belle Avenue
  Olive Street between Main Street and South Victoria Avenue
  Please anticipate increased traffic congestion in the area on July 4.
  
  SANTANA PARK FOOD FESTIVAL & FIREWORKS
  The fun will continue at Santana Park beginning at 5 p.m. with live music and food vendors.
  
  ENTERTAINMENT
  The entertainment begins at 5 p.m. with Kids Rock Free School of Music. The young group has performed at numerous events around Southern California and received rave reviews for their shows.
  
  Returning to the Independence Day stage is Corona’s own – Yard Sale! Yard Sale is an 8-piece, high-energy, horn-driven, powerhouse band that covers all the best dance hits from the 70’s through today. Yard Sale has been a regular on the Downtown Disney stage since 2013 and has played over 70 summer concert series events and countless private/corporate functions throughout Southern California. The camaraderie and energy on stage is contagious, and they’ll keep the dance floor full!
  
  FIREWORKS
  The celebration concludes with the eagerly anticipated firework show to occur at sundown.
  
  PARKING
  
  Santana Parking Lot- $5 parking fee for up-close parking spots
  Free parking at Crossroads Christian Church and School and Lee Pollard High School
  NOTICE
  
  No Dogs or pets allowed at the park
  No gas/propane BBQs (Charcoal only)
  No alcohol or cigarettes (including vaping) allowed in the park
  No drones
  ROAD CLOSURES
  
  Ontario Ave from Magnolia to Fullerton
  Magnolia from Main Street to Ontario
  Kellogg from Kingfisher to Pimpernel
  Fullerton from Old Temescal Canyon to McMackin
  Santana from Magnolia to Hidden Creek
  Garretson from CL Fleming to Santana
  Twinleaf from Lacey Oak to Santana
  Please anticipate increased traffic congestion in the area on July 4. 
  
  Closures are scheduled to begin at 11 a.m. and all closures are expected to be in place by 5 p.m. but all closures are subject to closure at any time.
  
  No one will be allowed through any street closure for safety reasons.
  `

  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/independence-day"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
