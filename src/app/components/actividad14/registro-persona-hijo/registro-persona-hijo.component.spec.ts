import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonaHijoComponent } from './registro-persona-hijo.component';

describe('RegistroPersonaHijoComponent', () => {
  let component: RegistroPersonaHijoComponent;
  let fixture: ComponentFixture<RegistroPersonaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPersonaHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPersonaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
