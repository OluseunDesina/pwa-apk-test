import { Component } from '@angular/core';
import { AsyncPaymentOptions, Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9Rave';
  publicKey = environment.raveKey

  customerDetails = { name: 'John Doe', email: 'john@mail.com', phone_number: '08100000000'}

  customizations = {title: 'Top Up wallet', description: 'Deposit', logo: 'https://www.secureidltd.com/assets/img/sid-logo.png'}

  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}

  constructor(
    private flutterwave: Flutterwave
  ) {}

   payViaPromise(amount) {
     const paymentData: InlinePaymentOptions = {
      public_key: this.publicKey,
      tx_ref: this.generateReference(),
      amount: amount,
      currency: 'NGN',
      payment_options: 'card,ussd,account,banktransfer,mpesa,mobilemoneyrwanda,mobilemoneyzambia,qr,mobilemoneyuganda,credit,barter,mobilemoneyghana,payattitude,mobilemoneyfranco,paga,1voucher,mobilemoneytanzania',
      redirect_url: '',
      meta: this.meta,
      customer: this.customerDetails,
      customizations: this.customizations,
      callback: this.makePaymentCallback,
      onclose: this.closedPaymentModal,
      callbackContext: this
    }

    this.flutterwave.inlinePay(paymentData)
  }

  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5)
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
}
