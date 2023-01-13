import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiculoPadreComponent } from './registro-vehiculo-padre.component';

describe('RegistroVehiculoPadreComponent', () => {
  let component: RegistroVehiculoPadreComponent;
  let fixture: ComponentFixture<RegistroVehiculoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVehiculoPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVehiculoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
