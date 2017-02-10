import { Component } from '@angular/core';
import {LoginService} from './login.service';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'app-login',
  templateUrl:'./login.component.html',
  providers:[LoginService]
})
export class LoginComponent{

private username:string;
  private password:string;
  private newLogin:any;
  private userId:string;
  private userName:string;
  constructor(private appservice:LoginService,private router:Router){

  }
  showpassword(){
    
    this.newLogin=[this.username,this.password];
    console.log(this.newLogin);

    this.appservice.login(this.newLogin).subscribe(data=>{
      this.nextEvent(data);
    })
    
  }
  nextEvent(data:any){
    if(data.status==="success"){
      //this.router.navigate(['/dashboard']);
      this.appservice.setData(data);
    }
    else{
      alert("Either the password or the username is wrong");
    }
  }
}