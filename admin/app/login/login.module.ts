import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LoginComponent }  from './login.component';
import {loginrouter} from './login.router';
import {LoginService} from './login.service';
@NgModule({
  imports:      [ CommonModule ,FormsModule,HttpModule,loginrouter],
  declarations: [ LoginComponent ],
  exports:[LoginService]
})
export class LoginModule { }
