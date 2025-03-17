import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'about', 
    component: AboutComponent, 
    children: [{ path: 'profile', component: ProfileComponent }] 
  },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: 'parent', 
    component: ParentComponent, 
    children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent },
      { path: '', redirectTo: 'child-one', pathMatch: 'full' } 
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
