import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';

const loginroutes:Routes=[
    {path:'',component:LoginComponent},
    
];

export const loginrouter:ModuleWithProviders=RouterModule.forChild(loginroutes);