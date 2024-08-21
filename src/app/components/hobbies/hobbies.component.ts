import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css',
})
export class HobbiesComponent {
  showHobbies = false;
  hobbies = ['Volleyball', 'Traveling', 'Coding'];

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}
