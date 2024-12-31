import { Component } from '@angular/core';
import { Trainer } from '../models/instructor';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainer-details.component.html',
  styleUrl: './trainer-details.component.scss'
})
export class TrainerDetailsComponent {
  @Input() trainer?: Trainer;

  constructor() { }

  hasCertification(): boolean | undefined {
    return this.trainer?.certification && this.trainer.certification.length > 0;
  }
}
