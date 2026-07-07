import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/profile';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly entries = EXPERIENCE;
}
