import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;
  getUsers(){
    return[  
      new User('Saleh Zarora', 'saleh@gmail.com','123','kfar manda'),   
      new User('Yazan Khateeb', 'yazan.khateeb1999@gmail.com','123','Kawkab')      
     ];
  }
  constructor() { }
  savedUser:string=""
  savedEmail:string=""
  savedAddress:string=""
}

class User{
  name: string;
  email: string;
  password: string;
  address: string;


constructor(name: string, email: string , password: string, address: string) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.address = address;
 }
 savedUser(){
   return this.name
 }
 savedEmail(){
  return this.email
}
savedAddress(){
  return this.address
}
}
