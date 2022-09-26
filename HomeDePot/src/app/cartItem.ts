import { Product } from "./products.service";

export class cartProduct{
user:String;
product:Product;
quantity:number=1;
constructor(user:String,product:Product){
    this.user=user;
    this.product=product;
}
}

