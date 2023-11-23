import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
