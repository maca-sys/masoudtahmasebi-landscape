import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/profile';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly entries = EDUCATION;
}
