import { Component, HostListener} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [MatIconModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
scrollToWhoIAm() {
  const section = document.getElementById('WHOIAM');
  section?.scrollIntoView({
    behavior: 'smooth'
  });
  
}

isMobile: boolean = false;

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 906; 
  }



}
