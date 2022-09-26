import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  name1: string = "Saleh Zarora"
  id1: string = "211918461"
  email1: string = "salehzarora.z.007@gmail.com"
  name2: string = "Yazan Khateeb"
  id2: string = "207733585"
  email2: string = "yazan@gmail.com"
  tel1:string="0543949907"
  tel2:string="0558871603"

  constructor() { }

  ngOnInit(): void {
  }

}
