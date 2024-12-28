import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutesComponent } from './tutes.component';

describe('TutesComponent', () => {
  let component: TutesComponent;
  let fixture: ComponentFixture<TutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
