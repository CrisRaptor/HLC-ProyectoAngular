import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorTiendaComponent } from './gestor-tienda.component';

describe('GestorTiendaComponent', () => {
  let component: GestorTiendaComponent;
  let fixture: ComponentFixture<GestorTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
