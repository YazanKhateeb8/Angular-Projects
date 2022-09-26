import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sitename: string = "Gaming NE"
  address : string = "Hazafon,Israel"
  email1: string = "salehzarora.z.007@gmail.com"
  email2: string = "yazan@gmail.com"

}
