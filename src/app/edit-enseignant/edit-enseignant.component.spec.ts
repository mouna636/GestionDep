import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnseignantComponent } from './EditEnseignantComponent.1';

describe('EditEnseignantComponent', () => {
  let component: EditEnseignantComponent;
  let fixture: ComponentFixture<EditEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
