import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceView } from './experience.view';

describe('ExperienceComponent', () => {
  let component: ExperienceView;
  let fixture: ComponentFixture<ExperienceView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
