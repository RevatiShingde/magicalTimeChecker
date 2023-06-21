import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalTimeCheckerComponent } from './magical-time-checker.component';

describe('MagicalTimeCheckerComponent', () => {
  let component: MagicalTimeCheckerComponent;
  let fixture: ComponentFixture<MagicalTimeCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagicalTimeCheckerComponent]
    });
    fixture = TestBed.createComponent(MagicalTimeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
