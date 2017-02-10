import { NgModule }      from '@angular/core';

import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DashboardComponent }  from './dashboard.component';
import {dashboardrouter} from './dashboard.routes';
import {LoginModule} from '../login/login.module';

@NgModule({
  imports:      [ FormsModule,HttpModule,dashboardrouter,LoginModule],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }