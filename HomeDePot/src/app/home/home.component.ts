import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { Product, ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string ="";
  products1: any;
  products2: Product[];
  
  constructor(private UsersService : UsersService,private products:ProductsService,private cartService:CartsService) { }
 
  ngOnInit() {
    this.username = this.UsersService.saved.name
     this.OnSale();
     this.latest();
  }
  
  // Add2C(products: any) {
  //   this.cartService.Add2C(products);
  //   window.alert('Your product has been added to the cart!');
  // }
  OnSale(){
    this.products.getProductSale().subscribe((data) => {
      console.log(data);
      this.products2=data;
    });
}
  latest(){
    this.products.getProductsLatest().subscribe((data) => {
      console.log(data);
      this.products1=data;
    });
  }

}