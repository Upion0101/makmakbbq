import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  readonly doordashUrl = 'https://www.doordash.com/store/mak-mak%E2%80%99s-barbecue-louisville-34723135/78385167/?srsltid=AfmBOore0BskDVQfMNlEz1JFmfqQURn3vigbPcWp-CcW0r5Ulbv3Vv44';
  readonly phoneNumber = '(502) 536-5988';
  readonly phoneHref = 'tel:+15025365988';
}