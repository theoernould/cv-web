import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceBlocComponent } from './competence-bloc.component';

describe('CompetenceBlocComponent', () => {
  let component: CompetenceBlocComponent;
  let fixture: ComponentFixture<CompetenceBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
