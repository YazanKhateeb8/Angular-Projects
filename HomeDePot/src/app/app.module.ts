import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ProdpreviewComponent } from './prodpreview/prodpreview.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SidebarComponent,
    ProductComponent,
    ProdpreviewComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ContactsComponent,
    CartComponent,
    RegisterComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
