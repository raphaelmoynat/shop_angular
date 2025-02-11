import {CartService} from '../../services/cart.service';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';


@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();

  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
  }


  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

}


