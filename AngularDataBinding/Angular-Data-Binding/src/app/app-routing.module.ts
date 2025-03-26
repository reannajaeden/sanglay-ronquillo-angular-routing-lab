import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'edit-product/:id', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Make sure you have RouterModule imported
  exports: [RouterModule]
})
export class AppRoutingModule { }
