import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:User[];
  nuser = new User(null,"","","","","","","https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png");
  constructor(private user: UsersService, private router: Router) {}
  ngOnInit() {
    this.getUser();
  }         
  getUser() {
    this.user.getUsers().subscribe((data) => {
      console.log(data);
      this.users=data;
    });
  }
  addUser() {
    if((this.nuser.email &&this.nuser.name &&this.nuser.fullname && this.nuser.password)==""){
      window.alert('please try again and fill it properly');
    }
    if((this.nuser.email &&this.nuser.name &&this.nuser.fullname && this.nuser.password) !=""){
      this.user.addUser(this.nuser).subscribe((data) => {
      console.log(data);
      this.getUser();
    });
    }
    
  } 
}