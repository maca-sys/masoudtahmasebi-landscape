import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { EXPERIENCE, SKILL_GROUPS } from '../../data/profile';

const COMMAND = 'curl https://max-ta.com/api/resume';

// The same numbers the live Worker serves — both read src/app/data/profile.ts.
const OUTPUT = JSON.stringify(
  {
    name: 'Max Tahmasebi',
    title: 'Tech Lead & Senior Full-Stack Software Engineer',
    location: 'Munich, Germany',
    experience: `${EXPERIENCE.length} roles · 12+ years`,
    skills: `${SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0)} technologies`,
    api: 'this endpoint is real — try it',
  },
  null,
  2,
);

@Component({
  selector: 'app-terminal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class Terminal implements OnInit, OnDestroy {
  protected readonly cmd = signal('');
  protected readonly out = signal('');
  protected readonly done = signal(false);

  private timer?: ReturnType<typeof setInterval>;
  private timeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      this.cmd.set(COMMAND);
      this.out.set(OUTPUT);
      this.done.set(true);
      return;
    }
    let i = 0;
    this.timer = setInterval(() => {
      i++;
      this.cmd.set(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(this.timer);
        this.timeout = setTimeout(() => this.printOutput(), 400);
      }
    }, 35);
  }

  private printOutput(): void {
    const lines = OUTPUT.split('\n');
    let i = 0;
    this.timer = setInterval(() => {
      i++;
      this.out.set(lines.slice(0, i).join('\n'));
      if (i >= lines.length) {
        clearInterval(this.timer);
        this.done.set(true);
      }
    }, 70);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    clearTimeout(this.timeout);
  }
}
