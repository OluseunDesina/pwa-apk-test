import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularRaveModule } from 'angular-rave';
import { AppComponent } from './app.component';
import { FlutterwaveModule } from 'flutterwave-angular-v3';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlutterwaveModule,
    // AngularRaveModule.forRoot('')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
