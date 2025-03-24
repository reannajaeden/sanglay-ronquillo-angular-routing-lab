import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageTitle= 'Angular 19 Data Binding';
  currentTime = new Date();
  imageUrl = 'https://th.bing.com/th/id/OIP.fELSwpooKE6Yt-h0UjQw2wHaG2?rs=1&pid=ImgDetMain';
  isDisabled = false;
  clickCount = 0;
  name = '';
  email = '';
  incrementCount() {
  this.clickCount++;
 

  }
  onInput(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  }
}
