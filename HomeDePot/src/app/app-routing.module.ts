import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'login'},
  {path:'home', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},  
  {path:'product/:id', component:ProductsDetailsComponent},
  //{path:'home/:Description', component:ProductsDetailsComponent},
  {path:'product', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'useri', component:UserInfoComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
