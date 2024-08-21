import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatListModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatTooltipModule, // Import MatTooltipModule here
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', rating: 4, showRating: false },
    { name: 'JavaScript', rating: 5, showRating: false },
    { name: 'HTML & CSS', rating: 5, showRating: false },
    { name: 'PHP', rating: 4, showRating: false },
  ];

  showRating(skill: any) {
    skill.showRating = true;
  }

  hideRating(skill: any) {
    skill.showRating = false;
  }

  toggleRating(skill: any) {
    skill.showRating = !skill.showRating;
  }
}
