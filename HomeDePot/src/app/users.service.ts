import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    baseURL : string = "http://localhost:3000/";
    headers = { 'content-type': 'application/json' };
    constructor(private http: HttpClient) {}
    getUsers(): Observable<any> {
      return this.http.get(this.baseURL + 'user');
      }
    addUser(newuser: User): Observable<any> {
        let headers ={'content-type':'application/json'};
        let body = JSON.stringify(newuser);
        return this.http.post(this.baseURL + 'user/' , body, {headers:headers});
    }
  saved=new User(null," "," "," "," "," "," "," ");
  user:string;
}
  export class User{
    id:number;
    name:string;
    fullname:string;
    email:string;
    mobile:string;
    password:string;
    address:string;
    img:string;
   
    constructor(id:number,name:string,fullname:string,email:string,mobile:string,password:string,address:string,img:string) { 
      this.id=id;
      this.name=name;
      this.fullname=fullname;
      this.email=email;
      this.mobile=mobile;
      this.password=password;
      this.address=address;
      this.img=img;
    }
}