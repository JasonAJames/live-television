import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

declare let paypal: any;

@Component({
  selector: 'app-advertise-commercial',
  templateUrl: './advertise-commercial.component.html',
  styleUrls: ['./advertise-commercial.component.css']
})
export class AdvertiseCommercialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
addScript: boolean = false;
finalAmount: number = 1;
paypalConfig = {
  env: 'sandbox',
  client: {
    sandbox: "AYNt1FW36K2XuUe4uv9nZOnqnp5X8K6Ms6qtd0igsRK9CxBXpnBPQ9VuPEuSZzs-aV3zosxUMqo5zFI2"
  },
  commit: true,
  payment: (data, actions) => {
    return actions.payment.create({
      payment: {
        transactions: [
          { amount: { total: this.finalAmount, currency: 'USD'}}
        ]
      }
    });
  },
  onAuthorize: (data, actions) => {
    return actions.payment.execute().then((payment) => {
      // TODO Payment Successful

    })
  }
};

ngAfterViewChecked(): void {
  if(!this.addScript) {
    this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypalSubmit_BTN')
    })
  }
}

addPaypalScript() {
  this.addScript = true;
  return new Promise((resolve, reject) => {
    let scripttagElement = document.createElement('script');
    scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
  })
}

}
