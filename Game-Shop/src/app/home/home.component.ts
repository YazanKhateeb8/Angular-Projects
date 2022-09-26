import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : String =" "
  users:any=" " 
  games: any =[]
  products: any =[]
  products1:any=[]

  constructor(private UsersService : UsersService,private productsService : ProductsService ,private usersservice: UsersService,private cartService:CartService) { }

  ngOnInit(): void {
    this.users = this.UsersService.getUsers()
    this.username = this.UsersService.savedUser
    this.games = this.productsService.getCategory()
    this.products=this.productsService.getHome1()
    this.products1=this.productsService.getHome2()
  }

  addToCart(products) {
    this.cartService.addToCart(products);
    window.alert('Your product has been added to the cart!');

  }


}
