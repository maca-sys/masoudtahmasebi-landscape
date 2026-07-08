import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMAIL, SOCIAL_LINKS } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { Terminal } from './terminal';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Terminal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly links = SOCIAL_LINKS;

  // Navigation happens only on a real user gesture: no mailto: in the DOM
  // means nothing for scrapers (even JS-executing ones) to harvest.
  protected openEmail(): void {
    window.location.href = 'mailto:' + EMAIL;
  }
}
