import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    ContactsComponent,
    FooterComponent,
    SidebarComponent,
    ShowproductComponent,
    LoginComponent,
    UserinfoComponent,
    PagenotfoundComponent,

    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
