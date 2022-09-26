import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.service';
import { cartProduct } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  amount:number=0;
  count:number=0;
  user:String;
  baseURL : string = "http://localhost:3000/"
  headers = { 'content-type': 'application/json' };

  constructor(private http:HttpClient) {}
  getCart():Observable<any>{
  return this.http.get(this.baseURL + `cart?user=${this.user}`);
  }
  addToCart(product:Product){
    let body = JSON.stringify(new cartProduct(this.user,product));
    return this.http.post(this.baseURL + 'cart', body,{
    headers: this.headers
    });
  }
  deleteProduct(i:Product): Observable<any> {
    return this.http.delete(this.baseURL + 'cart/' + i.id);
    }
  getAmount() {
    return this.amount;
  }
  getCount() {
    return this.count;
  }
}
