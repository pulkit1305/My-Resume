import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCard],
  templateUrl: './project-detail-dialog.component.html',
  styleUrl: './project-detail-dialog.component.css',
})
export class ProjectDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
