import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { EducationDetailsComponent } from '../education-details/education-details.component';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'SRMIST',
      graduationDate: '2024',
      grade: 9.0,
      description: 'Specialized in software engineering and data analysis.',
    },
    {
      degree: 'Class XII',
      institution: 'DAV Public School',
      graduationDate: '2020',
      grade: 88.8,
      description:
        'Completed higher secondary education with a focus on science.',
    },
    {
      degree: 'Class X',
      institution: 'DAV Public School',
      graduationDate: '2018',
      grade: 77.6,
      description:
        'Completed secondary education with a strong performance in mathematics and science.',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openEducationDetails(edu: any): void {
    this.dialog.open(EducationDetailsComponent, {
      width: '400px',
      data: edu,
    });
  }
  onDateClick(edu: any) {
    console.log('Date clicked:', edu.graduationDate);
    // You can implement further functionality here, such as opening a modal
  }
}
