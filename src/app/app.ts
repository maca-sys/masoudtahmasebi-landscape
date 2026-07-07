import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeader } from './sections/site-header/site-header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiteHeader, Hero, About, Experience, Projects, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
