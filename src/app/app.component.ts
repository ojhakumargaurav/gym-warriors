import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { TrainersComponent } from './trainers/trainers.component';
import { GymhomepageComponent } from './gymhomepage/gymhomepage.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    TrainerDetailsComponent,
    TrainersComponent,
    GymhomepageComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  
  title = 'Gym Warriors';
  
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  navItems = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/trainers', label: 'Trainers', icon: 'fitness_center' }
  ];

  closeSidenav() {
    if (this.drawer && this.breakpointObserver.isMatched([Breakpoints.Handset, Breakpoints.Tablet])) {
      this.drawer.close();
    }
  }
}
