import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitsComponent } from './digits/digits.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ResultsetComponent } from './resultset/resultset.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitsComponent,
    HomeComponent,
    ResultsetComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
