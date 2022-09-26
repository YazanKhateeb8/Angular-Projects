import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  username : string =""
  email: string=""
  address: string=""
  //img: string=""
  users:any=""
  constructor(private UsersService : UsersService) { }

  ngOnInit(): void {
    this.users = this.UsersService.getUsers()
    this.username = this.UsersService.savedUser
    this.email=this.UsersService.savedEmail
    this.address=this.UsersService.savedAddress
    
 }

}
