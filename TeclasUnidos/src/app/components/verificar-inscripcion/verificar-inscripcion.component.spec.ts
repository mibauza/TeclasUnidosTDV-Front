import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarInscripcionComponent } from './verificar-inscripcion.component';

describe('VerificarInscripcionComponent', () => {
  let component: VerificarInscripcionComponent;
  let fixture: ComponentFixture<VerificarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarInscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
