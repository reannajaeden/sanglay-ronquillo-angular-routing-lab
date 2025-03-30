import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Fix for *ngIf, *ngFor, [(ngModel)]
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isLoading = true;
  product!: Product;
  purchaseQuantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProduct(id).subscribe({
        next: (product) => {
          this.product = product!;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          console.error('Error fetching product details');
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  getRatingColor(rating: number): string {
    return rating >= 4.5 ? 'green' : rating >= 3.5 ? 'orange' : 'red';
  }

  getStarsArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  decrementQuantity(): void {
    if (this.purchaseQuantity > 1) {
      this.purchaseQuantity--;
    }
  }

  incrementQuantity(): void {
    if (this.product && this.purchaseQuantity < this.product.quantity) {
      this.purchaseQuantity++;
    }
  }

  addToCart(): void {
    console.log(`Added ${this.purchaseQuantity} of ${this.product.name} to cart`);
  }

  editProduct(): void {
    this.router.navigate(['/edit-product', this.product.id]);
  }

  deleteProduct(): void {
    if (confirm(`Are you sure you want to delete ${this.product.name}?`)) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
