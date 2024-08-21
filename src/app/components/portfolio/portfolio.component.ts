import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list'; // Import MatGridListModule
import { CommonModule } from '@angular/common';
import { ProjectDetailDialogComponent } from '../project-detail-dialog/project-detail-dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    CommonModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Online Food Ordering and Restaurant Management System',
      image: 'Project1.png',
      description: `Developed an online food ordering and restaurant management application using PHP and MySQL, serving over 500 users and 50 restaurant partners.`,
      techStack: 'PHP, MySQL, HTML, CSS, JavaScript',
    },
    {
      name: 'E-commerce Shopping Website',
      image: 'Project2.png',
      description: `Developed an e-commerce website from scratch using HTML, CSS, and JavaScript. Implemented dynamic product rendering and shopping cart functionality.`,
      techStack: 'HTML, CSS, JavaScript',
    },
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(project: any): void {
    this.dialog.open(ProjectDetailDialogComponent, {
      width: '600px',
      data: project,
    });
  }
}
