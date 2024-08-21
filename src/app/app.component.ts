import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { DynamicPdfComponent } from './components/dynamic-pdf/dynamic-pdf.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent,
    PortfolioComponent,
    ContactComponent,
    LocationMapComponent,
    DynamicPdfComponent,
    ContactFormComponent,
    SummaryComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'my-resume';
}
