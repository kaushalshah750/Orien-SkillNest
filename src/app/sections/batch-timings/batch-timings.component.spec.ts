import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchTimingsComponent } from './batch-timings.component';

describe('BatchTimingsComponent', () => {
  let component: BatchTimingsComponent;
  let fixture: ComponentFixture<BatchTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchTimingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
