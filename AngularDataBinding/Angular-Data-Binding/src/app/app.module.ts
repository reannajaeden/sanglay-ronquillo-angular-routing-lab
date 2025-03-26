import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductFormComponent } from './components/product-form/product-form.component';

import { DashboardComponent } from
'./components/dashboard/dashboard.component';
@NgModule({
declarations: [
AppComponent,
HeaderComponent,
FooterComponent,
ProductListComponent,
ProductDetailComponent,
ProductFormComponent,
DashboardComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }