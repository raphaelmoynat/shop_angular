import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  async deleteProduct(productId: any) {
    await this.productService.deleteProduct(productId);
  }

  async showProduct(productId: any) {
    await this.productService.getOneProduct(productId)
  }
}
