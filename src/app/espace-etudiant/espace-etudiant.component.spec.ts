import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/edit-etudiant/edit-etudiant.component.spec.ts
import { EditEtudiantComponent } from './edit-etudiant.component';

describe('EditEtudiantComponent', () => {
  let component: EditEtudiantComponent;
  let fixture: ComponentFixture<EditEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEtudiantComponent);
========
import { EspaceEtudiantComponent } from './espace-etudiant.component';

describe('EspaceEtudiantComponent', () => {
  let component: EspaceEtudiantComponent;
  let fixture: ComponentFixture<EspaceEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceEtudiantComponent);
>>>>>>>> e4e7042326c4defcd158f16b85be5dde1dd50c1a:src/app/espace-etudiant/espace-etudiant.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
