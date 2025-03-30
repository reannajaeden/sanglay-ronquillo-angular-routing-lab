import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Fix for *ngIf, *ngFor, [(ngModel)]
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  isLoading = true;
  isDeleting = false;

  searchTerm = '';
  filterCategory = '';
  sortOption = 'name';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
      this.categories = [...new Set(products.map(p => p.category))];
      this.sortProducts();
      this.isLoading = false;
    });
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const categoryMatch = !this.filterCategory || product.category === this.filterCategory;
      return nameMatch && categoryMatch;
    });
    this.sortProducts();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchProducts();
  }

  sortProducts(): void {
    switch (this.sortOption) {
      case 'name':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        this.filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  getRatingColor(rating: number): string {
    return rating >= 4.5 ? 'green' : rating >= 3.5 ? 'orange' : 'red';
  }

  getStarsArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }

  editProduct(id: number): void {
    this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.isDeleting = true;
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
        this.isDeleting = false;
      });
    }
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }
}