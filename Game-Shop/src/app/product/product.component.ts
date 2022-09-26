import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

      @ViewChild(SidebarComponent) sidebar:SidebarComponent;
    

  constructor( ) { }

  ngOnInit(): void {

  }
}