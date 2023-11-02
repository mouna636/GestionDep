import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAdministrativeComponent } from './espace-administrative.component';

describe('EspaceAdministrativeComponent', () => {
  let component: EspaceAdministrativeComponent;
  let fixture: ComponentFixture<EspaceAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
