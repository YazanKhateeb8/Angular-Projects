import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  home: any =['Bedroom','Kitchen','Bathroom']

  constructor() { }
  selectedProduct:string ="";
  prodpreviewComponent : boolean = false;

  showBed(){
    this.selectedProduct = 'Bedroom'
    this.prodpreviewComponent = true
  }
  showKit(){
    this.selectedProduct = 'Kitchen'
    this.prodpreviewComponent = true
  }
  showBath(){
    this.selectedProduct = 'Bathroom'
    this.prodpreviewComponent = true
  }
  ngOnInit(): void {
  }

}
