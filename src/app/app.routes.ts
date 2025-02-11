import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AddProductComponent} from './pages/add-product/add-product.component';
import {EditProductComponent} from './pages/edit-product/edit-product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {CartComponent} from './components/cart/cart.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomeComponent },
  {path: 'cart', component: CartComponent},
];
