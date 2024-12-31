import { Component } from '@angular/core';
import { Trainer } from '../models/instructor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {
  trainers: Trainer[] = [
    { id: 1, name: 'Gauri Kumari', skills: ['Personal Training', 'Group Fitness'], trainingType: 'Personal Training', imageUrl: 'https://picsum.photos/200/300' },
    { id: 2, name: 'Vijay Singh', skills: ['Yoga', 'Pilates'], trainingType: 'Group Fitness', imageUrl: 'https://picsum.photos/200/301' },
  ];
}
