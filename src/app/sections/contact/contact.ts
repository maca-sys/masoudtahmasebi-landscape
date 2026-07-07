import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly links = SOCIAL_LINKS;
}
