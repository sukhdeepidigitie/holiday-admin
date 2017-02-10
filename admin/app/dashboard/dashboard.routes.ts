import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

const dashboardroutes:Routes=[
    {path:'',component:DashboardComponent},
    
];

export const dashboardrouter:ModuleWithProviders=RouterModule.forChild(dashboardroutes);