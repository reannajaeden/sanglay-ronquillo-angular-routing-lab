import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Product Management App';
  currentPage = 'Dashboard';
  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const path = event.urlAfterRedirects;
        this.currentPage = path.includes('/dashboard') ? 'Dashboard' :
                          path.includes('/products') && !path.includes('/add-product') ? 'Products' :
                          path.includes('/add-product') ? 'Add Product' :
                          path.includes('/edit-product') ? 'Edit Product' : 'Dashboard';
      });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    console.log('Theme toggled:', this.isDarkTheme ? 'Dark' : 'Light');
  }
}
