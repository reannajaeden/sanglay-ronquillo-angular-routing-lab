import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';

 const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent, children: 
   [{path: 'profile', component: ProfileComponent}] },
   { path: 'contact', component: ContactComponent },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }