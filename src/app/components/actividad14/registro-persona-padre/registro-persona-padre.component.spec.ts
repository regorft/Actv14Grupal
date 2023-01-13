import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonaPadreComponent } from './registro-persona-padre.component';

describe('RegistroPersonaPadreComponent', () => {
  let component: RegistroPersonaPadreComponent;
  let fixture: ComponentFixture<RegistroPersonaPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPersonaPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPersonaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
