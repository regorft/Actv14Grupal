import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiculoHijoComponent } from './registro-vehiculo-hijo.component';

describe('RegistroVehiculoHijoComponent', () => {
  let component: RegistroVehiculoHijoComponent;
  let fixture: ComponentFixture<RegistroVehiculoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVehiculoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVehiculoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
