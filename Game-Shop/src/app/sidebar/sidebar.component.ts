import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  side: any =[]

  constructor(private productsservice:ProductsService) { }
selectedProduct:String ="";
 showproductComponent : boolean = false;
  

  showAction(){
    this.selectedProduct = 'Action'
    this.showproductComponent = true
  }

  showStrategy(){
    this.selectedProduct = 'Strategy'
    this.showproductComponent = true
  }

  showRacing(){
    this.selectedProduct = 'Racing'
    this.showproductComponent = true
  }

  showSport(){
    this.selectedProduct = 'Sport'
    this.showproductComponent = true
  }
  ngOnInit(): void {
    this.side=this.productsservice.getCategory();
  }
}