import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from '../carts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  products=[];

  constructor(private userService: UsersService, private router: Router,private cartservice:CartsService) {}
  ngOnInit() {
    this.getUser();
    this.userService.getUsers();
  }
  getUser() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users=data;
    });
  }
  onSubmit(loginForm) {
    for(let user of this.users) {
      if(user.name == loginForm.value.name && user.password == loginForm.value.password)
      {
        console.log('Valid user')
        this.router.navigateByUrl('/home');
        this.userService.saved.name=user.name;
        this.userService.saved.email=user.email;
        this.userService.saved.address=user.address;
        this.userService.saved.img=user.img;
        this.userService.saved.fullname=user.fullname;
        this.userService.saved.mobile=user.mobile;
        this.cartservice.user=user.name;
        this.userService.user=user.name;
        return;
      }
    }       
     console.log('Invalid user')
     alert("Error :\n Username or Password is/are invalid.")
  }
}