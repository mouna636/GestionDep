import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEtudiantComponent } from './service-etudiant.component';

describe('ServiceEtudiantComponent', () => {
  let component: ServiceEtudiantComponent;
  let fixture: ComponentFixture<ServiceEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
