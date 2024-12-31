import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TrainersComponent } from '../trainers/trainers.component';

@Component({
  selector: 'app-gymhomepage',
  standalone: true,
  imports: [MatCardModule, TrainersComponent],
  templateUrl: './gymhomepage.component.html',
  styleUrl: './gymhomepage.component.scss'
})
export class GymhomepageComponent {
  constructor(private router: Router) { }

  openTrainers() {
    const collapse = document.getElementById('personal-training-collapse');
    collapse?.classList.toggle('show');
  }
  title = 'Gym Warriors';
  description = 'Get fit, feel great, and achieve your goals with our expert trainers and state-of-the-art equipment.';
}
