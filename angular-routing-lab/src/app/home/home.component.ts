import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageTitle= 'Angular 19 Data Binding';
  currentTime = new Date();
  imageUrl = 'https://th.bing.com/th/id/OIP.UghT0woG1H9eTHb_F0LXyAHaFA?rs=1&pid=ImgDetMain';
  isDisabled = true;
  clickCount = 0;
  incrementCount() {
  this.clickCount++;
  }
  onInput(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  }
  name = '';
  email = '';
  showModal: boolean = false;
  isModalOpen = false; 
  user = { name: '', email: '' }; 
  
  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    console.log('User Details:', this.user); 
    this.closeModal(); 
  }
}
