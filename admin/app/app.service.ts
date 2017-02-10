import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class AppService{
     url:"/admin/login";
    constructor(private http:Http){

    }
    login(userdata:string[]){
        let data = new URLSearchParams();
         data.append('uname', userdata[0]);
         data.append('pwd', userdata[1]);
         console.log(data);
         return this.http.post("http://192.168.1.143:3000/admin/login",data).map(res=>res.json());

    }
}