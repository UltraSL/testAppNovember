import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedVideoComponent } from './recorded-video.component';

describe('RecordedVideoComponent', () => {
  let component: RecordedVideoComponent;
  let fixture: ComponentFixture<RecordedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordedVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
