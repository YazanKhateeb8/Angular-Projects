import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : String =" "
  users:any=" " 

  constructor(private UsersService : UsersService) { }
  


  ngOnInit(): void {
    this.username = this.UsersService.savedUser
  }
  imgUrl="https://icon2.cleanpng.com/20180319/row/kisspng-computer-icons-google-account-user-profile-iconfin-png-icons-download-profile-5ab0301d8907a6.3404305715214960935613.jpg"

}
