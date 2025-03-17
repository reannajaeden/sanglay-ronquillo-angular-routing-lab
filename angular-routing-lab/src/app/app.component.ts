import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from './about/profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,ContactComponent,HomeComponent,ProfileComponent,RouterLink, RouterLinkActive,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing-lab';
}
