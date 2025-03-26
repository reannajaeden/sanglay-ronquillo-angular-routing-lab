import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure AppRoutingModule is imported
import { RouterModule } from '@angular/router'; // Import RouterModule here

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Ensure AppRoutingModule is imported
    RouterModule // Import RouterModule here as well
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
