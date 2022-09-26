import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  username : string =""
  email: string=""
  FN: string=""
  address: string=""
  img: string=""
  mobile: string=""
  constructor(private UsersService :UsersService ) { }

  ngOnInit(): void {
    this.username = this.UsersService.saved.name
    this.email=this.UsersService.saved.email
    this.FN=this.UsersService.saved.fullname
    this.address=this.UsersService.saved.address
    this.img=this.UsersService.saved.img
    this.mobile=this.UsersService.saved.mobile
 }
}