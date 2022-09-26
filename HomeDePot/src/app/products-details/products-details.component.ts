import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:number;
  pro:any;
  current;

  constructor(private actRoute: ActivatedRoute,private products:ProductsService) { }

  ngOnInit(): void {
     this.id = this.actRoute.snapshot.params["id"];
     this.pro=this.getProducts();
     this.searchProduct();
   }
   getProducts() {
    this.products.getProducts().subscribe((data) => {
      console.log(data);
      this.pro=data;
      this.searchProduct();
    })
   }
   searchProduct(){
     for (let i of this.pro){
      if(this.id==i.id)
      this.current=i;
     }
    }
}
