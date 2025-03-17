import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { ParentComponent } from './parent/parent.component'; 
import { ChildOneComponent } from './child-one/child-one.component'; 
import { ChildTwoComponent } from './child-two/child-two.component'; 
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent },
    { 
      path: 'admin', 
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
      canActivate: [AdminGuard]
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
  declarations: [ 
    AppComponent, 
    ParentComponent, 
    ChildOneComponent, 
    ChildTwoComponent 
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
