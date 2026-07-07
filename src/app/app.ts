import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  imports: [DecimalPipe, SiteHeader, Hero, About, Experience, Projects, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Total visits from the /api/visits Worker; stays null (and hidden) if the API is unreachable. */
  protected readonly visits = signal<number | null>(null);

  constructor() {
    fetch('/api/visits')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { total?: unknown } | null) => {
        if (data && typeof data.total === 'number') {
          this.visits.set(data.total);
        }
      })
      .catch(() => {
        // no API (local dev, preview deploys) — the footer simply omits the count
      });
  }
}
