import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/profile';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
