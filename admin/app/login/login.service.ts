import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService{
     url:"/admin/login";
     userId:string;
     username:string;
    constructor(private http:Http){

    }
    login(userdata:string[]){
        let data = new URLSearchParams();
         data.append('uname', userdata[0]);
         data.append('pwd', userdata[1]);
         console.log(data);
         return this.http.post("http://192.168.1.143:3000/admin/login",data).map(res=>res.json());

    }
   setData(data:any){
       this.userId=data.uid;
       this.username=data.fname;
   }
   getData(){
      let some={
          user:this.username,
          userId:this.userId
      }
      return some;
   }
}

