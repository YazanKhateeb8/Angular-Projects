import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  Amount:number=0;
  count:number=0;

  constructor() { }
  addToCart(Product) {
    this.items.push(Product);
    this.Amount+=Product.Price;
    this.count+=1;
  }

  getItems() {
    return this.items;
  }
  getAmount() {
    return this.Amount;
  }
  getCount() {
    return this.count;
  }
}

