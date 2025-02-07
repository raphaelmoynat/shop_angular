import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  productId: string | null = null;
  product = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.productService.getProducts().subscribe(products => {
        const foundProduct = products.find(p => p.id === this.productId);
        if (foundProduct) {
          this.product = foundProduct;
        }
      });
    }
  }

  async updateProduct() {
    if (!this.productId) return;

    try {
      await this.productService.updateProduct(this.productId, this.product);
      console.log(this.product);
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
    }
  }


}
