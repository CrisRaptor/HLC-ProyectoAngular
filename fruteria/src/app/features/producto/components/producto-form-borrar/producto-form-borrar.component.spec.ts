import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormBorrarComponent } from './producto-form-borrar.component';

describe('ProductoFormBorrarComponent', () => {
  let component: ProductoFormBorrarComponent;
  let fixture: ComponentFixture<ProductoFormBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoFormBorrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoFormBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
