import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
providedIn: 'root'
})
export class ProductService {
private products: Product[] = [
{
id: 1,
name: 'Iphone X',
description: 'Iphone with amazing features',
price: 799.99,
imageUrl: 'https://mac-more.co.ke/wp-content/uploads/2024/03/apple-iphone-x-256gb-silver-4728-1-p.jpg',
isAvailable: true,
category: 'Electronics',
rating: 4.5,
quantity: 10
},
{
id: 2,
name: 'Laptop Pro',
description: 'Powerful laptop for professionals',
price: 1299.99,
imageUrl: 'https://hniesfp.imgix.net/8/images/detailed/786/ZGM-00040.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress',
isAvailable: true,
category: 'Electronics',
rating: 4.8,
quantity: 5
},
{
id: 3,
name: 'Wireless Headphones',
description: 'Premium sound quality with noise cancellation',
price: 249.99,
imageUrl: 'https://myhypergear.com/cdn/shop/products/15610-HYG-Vibe-Wireless-Headphones-001.jpg?v=1649707539',
isAvailable: false,
category: 'Audio',
rating: 4.2,
quantity: 0
},
{
id: 4,
name: 'Smart Watch',
description: 'Track your fitness and stay connected',
price: 199.99,
imageUrl: 'https://www.thestylesalad.in/cdn/shop/files/SnapUpStyleSaladCreativesVision3.webp?v=1716977743',
isAvailable: true,
category: 'Wearables',
rating: 4.0,
quantity: 15
}
];
constructor() { }

getProducts(): Observable<Product[]> {
return of(this.products);
}
getProduct(id: number): Observable<Product | undefined> {
const product = this.products.find(p => p.id === id);
return of(product);
}
addProduct(product: Product): Observable<Product> {
// Generate a new ID (in a real app, the backend would do this)
const newId = Math.max(...this.products.map(p => p.id)) + 1;
const newProduct = { ...product, id: newId };
this.products.push(newProduct);
return of(newProduct);
}
updateProduct(product: Product): Observable<Product> {
const index = this.products.findIndex(p => p.id === product.id);
if (index !== -1) {
this.products[index] = { ...product };
return of(this.products[index]);
}
return of(product); // In a real app, you might want to handle this case differently
}
deleteProduct(id: number): Observable<boolean> {
const index = this.products.findIndex(p => p.id === id);
if (index !== -1) {
this.products.splice(index, 1);
return of(true);
}
return of(false);
}
}