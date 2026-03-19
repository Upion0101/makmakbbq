import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catering.html',
  styleUrl: './catering.scss',
})
export class Catering {
  cateringItems: string[] = [
    'Pork or Chicken Skewers',
    'Chicken Inasal',
    'Eggroll',
    'Chicken Cordon Bleu',
    'Pancit',
    'Chicken Fried Rice',
  ];

  processSteps: string[] = [
    'Reach out by email or phone with your event date, guest count, and what you are interested in ordering.',
    'We will talk through your catering needs and help confirm the best food options for your group.',
    'Once details are confirmed, we will coordinate timing, pickup, or delivery arrangements.',
  ];
}