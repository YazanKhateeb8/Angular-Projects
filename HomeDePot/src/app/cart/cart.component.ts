import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any [];
  amount:number;
  count:number=0;
  user:String;
  constructor(private cartService: CartsService) { }

  ngOnInit(): void {
    this.amount=this.cartService.getAmount();
    this.getToCart();
    this.user=this.cartService.user;
  }
  price(SerialNumber){
    let price=0;
    for(let i of this.items){
      if(SerialNumber==i.product.SerialNumber){
        price=i.product.Price*i.quantity;
      }
    }
    return price;
  }
    
    total(){
      let totalPrice=0;
      for(let i of this.items){
        if(this.checkUser(i.user)){
          totalPrice+=this.price(i.product.SerialNumber);
        }
      }
      return totalPrice;
    }
    checkUser(user:String){
      if(this.user==user){
        return true;
      }
    }
    getToCart(){
      this.cartService.getCart().subscribe((res=>{
        this.items=res;
       
      }))
    }
    deleteProduct(i){
      this.cartService.deleteProduct(i).subscribe((data)=>{
        console.log(data);
        this.getToCart();
        alert("item has been deleted successfuly");
      })
    }
      getCount(){
        for(let i of this.items){
          this.count+=1;
          return this.count;
        }
      }
    }