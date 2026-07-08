import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EMAIL, SOCIAL_LINKS } from '../../data/profile';
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
  protected readonly email = EMAIL;

  // The address enters the DOM only after a user gesture, as selectable
  // text without a mailto: href — nothing for harvesters to collect.
  protected readonly revealed = signal(false);

  protected reveal(): void {
    this.revealed.set(true);
  }
}
