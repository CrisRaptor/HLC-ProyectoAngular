import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormCrearComponent } from './producto-form-crear.component';

describe('ProductoFormCrearComponent', () => {
  let component: ProductoFormCrearComponent;
  let fixture: ComponentFixture<ProductoFormCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoFormCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoFormCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
