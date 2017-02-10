import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {approuter} from './app.routes';
@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule,approuter],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports:[]
})
export class AppModule { }
