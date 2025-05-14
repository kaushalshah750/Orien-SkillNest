import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from './sections/hero/hero.component';
import { WhyUsComponent } from "./sections/why-us/why-us.component";
import { CoursesComponent } from "./sections/courses/courses.component";
import { BatchTimingsComponent } from "./sections/batch-timings/batch-timings.component";
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { TestimonialsComponent } from "./sections/testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, WhyUsComponent, CoursesComponent, BatchTimingsComponent, AboutComponent, ContactComponent, FooterComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Skillnest';
}
