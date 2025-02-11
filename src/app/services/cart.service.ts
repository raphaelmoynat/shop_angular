import { Injectable } from '@angular/core';
import {Auth, onAuthStateChanged, User} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private currentUser: User | null = null;

  constructor() {}

  addToCart(product: any) {
    let cart = this.getCart();
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }


  getCart(): any[] {
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
  }

  removeFromCart(product: any) {
    let cart = this.getCart().filter(item => item.name !== product.name);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    sessionStorage.removeItem('cart');
  }
}
