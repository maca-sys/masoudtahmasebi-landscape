import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATS } from '../../data/profile';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly stats = STATS;
}
