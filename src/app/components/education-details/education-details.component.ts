import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-education-details',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule],
  templateUrl: './education-details.component.html',
  styleUrl: './education-details.component.css',
})
export class EducationDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<EducationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
