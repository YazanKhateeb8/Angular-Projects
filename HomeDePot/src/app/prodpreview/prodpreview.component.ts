import { Component, Input, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { Product, ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-prodpreview',
  templateUrl: './prodpreview.component.html',
  styleUrls: ['./prodpreview.component.css']
})
export class ProdpreviewComponent implements OnInit {
  @Input()selectedProduct:string;

  HC: Product[];
  prod = new Product(null," "," "," "," "," "," "," ");
  user:String;
  constructor(private productService:ProductsService,private userservice:UsersService ,private cartService:CartsService) { }


  ngOnInit() {
    this.getProducts();
    this.user=this.userservice.user;
}
getProducts() {
  this.productService.getProducts().subscribe((data) => {
    console.log(data);
    this.HC=data;
  });
}
addtoCart(Product){
  this.cartService.addToCart(Product).subscribe((res=>{
    alert("The Product has been added to Your cart");
  })); 
  
}
// addProduct() {
//   this.productService.addProduct(this.prod).subscribe((data) => {
//     console.log(data);
//     this.getProducts();
//   });
// }
// updateProduct() {
//   this.productService.updateProduct(this.prod).subscribe((data) => {
//     console.log(data);
//     this.getProducts();
//   });
// }
// deleteProduct() {
//   this.productService.deleteProduct(this.prod).subscribe((data) => {
//     console.log(data);
//     this.getProducts();
//   });
// }
//  Add2C(products: any) {
//    this.cartService.Add2C(products);
//     window.alert('Your product has been added to the cart!');
//   }
}