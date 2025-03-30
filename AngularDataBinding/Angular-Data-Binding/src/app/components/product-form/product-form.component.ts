import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service'; // Adjust the path as necessary
import { Product } from '../../models/product.model'; // Adjust the path as necessary

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    isAvailable: true,
    category: '',
    rating: 0,
    quantity: 0
  };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added successfully!');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      isAvailable: true,
      category: '',
      rating: 0,
      quantity: 0
    };
  }
}