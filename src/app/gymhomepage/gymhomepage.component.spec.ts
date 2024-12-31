import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymhomepageComponent } from './gymhomepage.component';

describe('GymhomepageComponent', () => {
  let component: GymhomepageComponent;
  let fixture: ComponentFixture<GymhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
