import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// Properties for interpolation
statsTitle = 'Product Statistics';
// Properties for product statistics

products: Product[] = [];
totalProducts = 0;
availableProducts = 0;
outOfStockProducts = 0;
// Properties for filtering (two-way binding)
categories: string[] = [];
selectedCategory = '';
maxPrice = 2000;
availableOnly = false;
filteredProducts: Product[] = [];
constructor(
private productService: ProductService,
private router: Router
) { }
ngOnInit(): void {
this.loadProducts();
}
loadProducts(): void {
this.productService.getProducts().subscribe(products => {
this.products = products;
// Calculate statistics
this.totalProducts = products.length;
this.availableProducts = products.filter(p =>
p.isAvailable).length;
this.outOfStockProducts = this.totalProducts -
this.availableProducts;
// Extract unique categories
this.categories = [...new Set(products.map(p => p.category))];
// Initial filtering
this.filterProducts();
});
}
// Method for event binding
navigateToProducts(): void {
this.router.navigate(['/products']);
}
// Method for event binding
navigateToAddProduct(): void {
this.router.navigate(['/add-product']);
}
// Method for filtering
filterProducts(): void {
this.filteredProducts = this.products.filter(product => {
// Filter by category

const categoryMatch = !this.selectedCategory || product.category
=== this.selectedCategory;
// Filter by price
const priceMatch = product.price <= this.maxPrice;
// Filter by availability
const availabilityMatch = !this.availableOnly ||
product.isAvailable;
return categoryMatch && priceMatch && availabilityMatch;
});
}
}