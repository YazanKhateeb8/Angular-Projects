import { Component,Input,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  @Input()selectedProduct:String;

  prodd = [];

  constructor(private productservice:ProductsService,private cartService:CartService  ){}

  ngOnInit(): void {
    this.prodd=this.productservice.getCategory();

  }
  addToCart(products) {
    this.cartService.addToCart(products);
    window.alert('Your product has been added to the cart!');

  }

}
