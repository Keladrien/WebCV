import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
selectedPage: string = 'Lucas Minville'

selectPage(page: string) {
    this.selectedPage = page;
  }
}
