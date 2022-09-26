import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items= [] ;
  count:number=0; 
  Amount:number=0;
  baseURL : string = "http://localhost:3000/";
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  addToCart(Product){
    this.items.push(Product);
    this.Amount+=Product.price;
    this.count+=1;
    }
    getItem(){
      return this.items;
    }
    getAmount(){
      return this.Amount;
    }
    getCount(){
      return this.count;
    }
    inCart:Product;  
  getProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'products');
    }
  
//   addProduct(product: Product): Observable<any> {
//     let headers ={'content-type':'application/json'};
//     let body = JSON.stringify(product);
//     return this.http.post(this.baseURL + 'products/' , body, {headers:headers});
// }
//   updateProduct(product: Product): Observable<any> {
//     let headers ={'content-type':'application/json'};
//     let body = JSON.stringify(product);
//     return this.http.put(this.baseURL + 'products/' + product.id, body, {headers:headers});
// }
// deleteProduct(product: Product): Observable<any> {
//     return this.http.delete(this.baseURL + 'products/' + product.id);
// }
  getProductSale(): Observable<any> {
    return this.http.get(this.baseURL + 'Onsale');
  }
  getProductsLatest(){
    return this.http.get(this.baseURL + 'latest');
  }
}

  
  export class Product {
  id:number; 
  SerialNumber:string;
  Name :string;
  Price:string;
  OldPrice:string;
  Category:string;
  Description:string;
  ImgUrl:string;
  constructor(id:number,SerialNumber:string,Name:string,Price:string,OldPrice:string,Category:string,Description:string,ImgUrl:string){
      this.id=id;
      this.SerialNumber=SerialNumber;
      this.Name=Name;
      this.Price=Price;
      this.OldPrice=OldPrice;
      this.Category=Category;
      this.Description=Description;
      this.ImgUrl=ImgUrl;
      }
  }