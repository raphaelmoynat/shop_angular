import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  async addProduct() {

    try {
      await this.productService.addProduct(this.product)
        console.log(this.product);
        this.product = {name: '', price: null};
        this.router.navigate(['/']);
      }
      catch(error){
        console.error(error);
      }

  }


}
