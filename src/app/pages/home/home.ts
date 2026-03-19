import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;

  doordashUrl =
    'https://www.doordash.com/store/mak-mak%E2%80%99s-barbecue-louisville-34723135/78385167/?srsltid=AfmBOore0BskDVQfMNlEz1JFmfqQURn3vigbPcWp-CcW0r5Ulbv3Vv44';

  heroProgress = 0;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.play().catch(() => {});
    }

    this.updateHeroScrollState();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateHeroScrollState(): void {
    const hero = this.heroSection?.nativeElement;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const totalScrollable = Math.max(hero.offsetHeight - viewportHeight, 1);
    const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);

    this.heroProgress = scrolled / totalScrollable;
  }
}