import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

const approutes:Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',loadChildren:'app/login/login.module#LoginModule'},
    {path:'dashboard',loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
];

export const approuter:ModuleWithProviders=RouterModule.forRoot(approutes);