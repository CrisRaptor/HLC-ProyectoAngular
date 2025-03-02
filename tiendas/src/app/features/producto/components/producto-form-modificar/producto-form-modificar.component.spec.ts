import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormModificarComponent } from './producto-form-modificar.component';

describe('ProductoFormModificarComponent', () => {
  let component: ProductoFormModificarComponent;
  let fixture: ComponentFixture<ProductoFormModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoFormModificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoFormModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
