import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { JobDetailsComponent } from '../job-details/job-details.component';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Angular Developer Trainee',
      company: 'CRIS',
      dates: 'June ’24 - Sept ’24',
      responsibilities: 'Developed web applications using Angular.',
      achievements: 'Improved application performance by 30%.',
    },
    {
      title: 'Web Developer Intern',
      company: 'Innovative Data Solutions Pvt. Ltd.',
      dates: 'June ’23 - Sept ’23',
      responsibilities:
        'During my web development internship, I was actively involved in Analyzed and integrated user feedback to enhance web application functionalities, collaborating with senior developers to achieve a 25% improvement in user satisfaction and a 15% reduction in reported issues',
      achievements: 'Contributed to the successful launch of 3 major features.',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openJobDetails(job: any): void {
    this.dialog.open(JobDetailsComponent, {
      width: '400px',
      data: job,
    });
  }
}
