import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/profile';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly links = SOCIAL_LINKS;
}
