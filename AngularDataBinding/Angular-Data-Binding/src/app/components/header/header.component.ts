import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Properties for interpolation
  title = 'Product Management App';
  currentPage = 'Dashboard';
  
  // Property for property binding
  isDarkTheme = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Update current page based on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const path = event.urlAfterRedirects;

      if (path.includes('/dashboard')) {
        this.currentPage = 'Dashboard';
      } else if (path.includes('/products') && !path.includes('/add-product')) {
        this.currentPage = 'Products';
      } else if (path.includes('/add-product')) {
        this.currentPage = 'Add Product';
      } else if (path.includes('/edit-product')) {
        this.currentPage = 'Edit Product';
      }
    });
  }

  // Method for event binding
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    console.log('Theme toggled:', this.isDarkTheme ? 'Dark' : 'Light');
  }
}
