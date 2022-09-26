import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  amount:number;
  count:number=0;
  constructor(private cartService: CartService,private productsService:ProductsService) { }
 

  ngOnInit(): void {
    this.getAmount();
    this.getCount();

  }
  getAmount(){
    this.amount=this.cartService.getAmount();
  }
  getCount(){
      this.count=this.cartService.getCount();
    }

}