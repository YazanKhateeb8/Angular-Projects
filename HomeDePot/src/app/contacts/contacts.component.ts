import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  name1: string = "Moad Irshed"
  id1: string = "209415272"
  email1: string = "m.irshed98@gmail.com"
  img1:string="https://th.bing.com/th/id/Rc7b5f6a007a193933d22f1b03bf2b43e?rik=abVDzKHa%2beLgiA&riu=http%3a%2f%2ficon-library.com%2fimages%2favatar-icon-images%2favatar-icon-images-4.jpg&ehk=ws%2fv4Ge3PuFmZ2Qx81d0efNpA6kD74yKVbqKZXYL1iw%3d&risl=&pid=ImgRaw"
  name2: string = "Yazan Khateeb"
  id2: string = "207733585"
  email2: string = "yazan.khateeb1999@gmail.com"
  img2:string="https://clipartart.com/images/clipart-avitars.png"

  constructor() { }

  ngOnInit(): void {
  }

}
