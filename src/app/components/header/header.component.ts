import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  name = 'Pulkit';
  jobTitle = 'Full Stack Developer';
  contactInfo = 'pulkit@example.com | 8920345330 | LinkedIn';
}
