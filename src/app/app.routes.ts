import { Routes } from '@angular/router';
import { GymhomepageComponent } from './gymhomepage/gymhomepage.component';
import { TrainersComponent } from './trainers/trainers.component';

export const routes: Routes = [
    { path: 'home', component: GymhomepageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'trainers', component: TrainersComponent}
];
