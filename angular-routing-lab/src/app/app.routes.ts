import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';


export const routes: Routes = [
    {path: 'about', component: AboutComponent, children: [{path: 'profile', component: ProfileComponent}]},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent}
];