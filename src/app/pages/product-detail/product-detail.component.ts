import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CartService} from '../../services/cart.service';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';
  product: any = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, protected cartService: CartService, public auth: Auth) {}

  async ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    try {
      this.product = await this.productService.getOneProduct(this.productId);
    } catch (error) {
      console.error(error);
    }
  }

  goToHost() {
    this.router.navigate(['/']);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }


}
