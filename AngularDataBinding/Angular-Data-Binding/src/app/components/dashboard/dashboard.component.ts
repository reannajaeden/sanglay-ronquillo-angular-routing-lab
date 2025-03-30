import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statsTitle = 'Product Statistics';
  products: Product[] = [];
  totalProducts = 0;
  availableProducts = 0;
  outOfStockProducts = 0;
  categories: string[] = [];
  selectedCategory = '';
  maxPrice = 2000;
  availableOnly = false;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.totalProducts = products.length;
      this.availableProducts = products.filter(p => p.isAvailable).length;
      this.outOfStockProducts = this.totalProducts - this.availableProducts;
      this.categories = [...new Set(products.map(p => p.category))];
      this.filterProducts();
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
      const priceMatch = product.price <= this.maxPrice;
      const availabilityMatch = !this.availableOnly || product.isAvailable;
      return categoryMatch && priceMatch && availabilityMatch;
    });
  }
}
