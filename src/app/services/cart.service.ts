import { Injectable } from '@angular/core';
import {Auth, onAuthStateChanged, User} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private auth: Auth) {}

  addToCart(product: any) {
    const userId = this.auth.currentUser?.uid;
    if (!userId) return alert("connectez-vous pour ajouter au panier");

    let cart = this.getCart();
    cart.push(product);
    sessionStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
  }


  getCart(): any[] {
    const userId = this.auth.currentUser?.uid;
    return userId ? JSON.parse(sessionStorage.getItem(`cart_${userId}`) || '[]') : [];
  }

  removeFromCart(product: any) {
    const userId = this.auth.currentUser?.uid;
    let cart = this.getCart().filter(item => item.name !== product.name);

    sessionStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
  }

  clearCart() {
    const userId = this.auth.currentUser?.uid;
    sessionStorage.removeItem(`cart_${userId}`);
  }
}
