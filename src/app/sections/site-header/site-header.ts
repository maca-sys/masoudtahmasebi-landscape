import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../theme.service';

interface NavItem {
  href: string;
  label: string;
  id: string;
}

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeader implements OnInit, OnDestroy {
  protected readonly themeService = inject(ThemeService);

  protected readonly navItems: NavItem[] = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal('');

  private rafPending = false;

  // Scroll-spy via scroll position rather than IntersectionObserver: short
  // sections at the end of the page (Education, Contact) can never reach an
  // observer's viewport-middle band, so the last nav item would never win.
  private readonly onScroll = (): void => {
    if (this.rafPending) {
      return;
    }
    this.rafPending = true;
    requestAnimationFrame(() => {
      this.rafPending = false;
      this.updateActiveSection();
    });
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
    // recheck after the sections below have rendered and laid out
    requestAnimationFrame(() => this.updateActiveSection());
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
  }

  private updateActiveSection(): void {
    const doc = document.documentElement;

    // Scrolled to (or past) the bottom of a scrollable page: the last section
    // is active even if it is too short to cross the activation line. The
    // scrollable check matters at init, before the sections have laid out.
    const scrollable = doc.scrollHeight > window.innerHeight;
    if (scrollable && window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
      this.activeSection.set(this.navItems[this.navItems.length - 1].id);
      return;
    }

    // Otherwise: the last section whose top has crossed a line 30% down the
    // viewport is active; above the first section nothing is highlighted.
    const activationLine = window.innerHeight * 0.3;
    let active = '';
    for (const item of this.navItems) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= activationLine) {
        active = item.id;
      }
    }
    this.activeSection.set(active);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
