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
  subdesc = "The City of Corona is hosting its 21th Anniversary Main Street USA Parade"
  paradeinfo = `
  FOURTH OF JULY IN CORONA PARADE on Thursday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street.

  PARADE INFO:
  The City of Corona is hosting its 20th Anniversary Main Street USA Parade, presented by the Corona Rotary, on Thursday, July 4 beginning at 9 a.m. at the intersection of Main and Ontario and moves north to Olive Street. Parade entries will line-up on Ontario Avenue, Main Street and Pueblo Road. 
  
  ROAD CLOSURES
  
  The following streets will be posted “No Parking” and closed to through traffic from approximately 6:30 a.m. to 12 p.m. on Thursday, July 4, 2019:
  
  Main Street between Ontario Avenue and Grand Boulevard
  Chatam Circle from the cul-de-sac to Summerset
  Pueblo Road between Main Street and Belle Avenue
  Olive Street between Main Street and Belle Avenue
  Olive Street between Main Street and South Victoria Avenue
  Please anticipate increased traffic congestion in the area on July 4.
  
  5 PM – Santana Park: Music • Food • Fireworks
  SANTANA PARK FOOD FESTIVAL & FIREWORKS
  The fun will continue at Santana Park beginning at 5 p.m. with live music and food vendors.
  
  ENTERTAINMENT
  The entertainment begins at 5 p.m. with community music group, CAT, followed by The Advancements. At 7:30 p.m., the 300th Army Band, an ensemble called "MPThree" will take the stage and perform modern rock, pop, and electronic covers.
  
  FOOD VENDORS
  Support local non-profit organizations and enjoy tasty food and refreshments available for purchase:

  Corona Norco Unified School District – Hot Dogs & Chili Dogs
  Congregation Beth Shalom – Cotton Candy
  Food Runners – Nachos & Burritos
  Girl Scout Troop 2053 – Funnel Cakes
  Islamic Society Corona Norco – Chicken Strips & Fries
  Pets are Work Saving (PAWS) – Lemonade
  Centennial Boy's Basketball Boosters – Mangonadas & Tostilocos
  Santiago Marching Band BOSS Boosters – Hawaiian Coffees & Smoothies

  FIREWORKS
  The celebration concludes with the eagerly anticipated firework show to occur at sundown.
  
  PARKING
  
  Pre-Sale Preferred Parking at Santana Park- $5 parking fee for up-close parking spots on through June 30th. [SOLD OUT]
  Parking at Santana Park- $10 parking fee for Santana parking lot on the day of the event, as space permits.
  Free parking at Crossroads Christian Church and surrounding community as posted.
  Note: There will not be shuttles this year. We apologize for the inconvenience.  NOTICE
  
  No Dogs or pets allowed at the park
  No gas/propane BBQs (Charcoal only in designated areas)
  No alcohol or cigarettes (including vaping) allowed in the park
  No drones

  ROAD CLOSURES
  
  Kellogg from Pimpernel to Ontario – 11 a.m. to 11 p.m.
  Ontario Ave from Magnolia to Fullerton – 7 p.m. to 11 p.m. 
  Magnolia from Main Street to Ontario – 7 p.m. to 11 p.m. 
  Santana from Magnolia to Orchard Crest – 3 p.m. to 11 p.m. 
  Garretson from CL Fleming to Santana – 3 pm to 11 p.m.
  Please anticipate increased traffic congestion in the area on July 4. 
  
  Closures are scheduled to begin at 11 a.m. and all closures are expected to be in place by 5 p.m. but all closures are subject to closure at any time.
  
  No one will be allowed through any street closure for safety reasons.

  To learn more, please call (951) 736-2241!
  `

  stationName = 'SoCal Television 4th of July LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

  // Social Sharing binding data
  title = "21st Annual Main Street USA Corona Independence Day Parade"
  header_link = this.title
  url = "https://www.socaltelevision.com/+#+/independence-day"
  summary = this.subdesc
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'Check out the SoCalTelevision.com coverage of ' + this.subdesc + '!'


}
