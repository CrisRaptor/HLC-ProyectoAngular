import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDetailsComponent } from './tienda-details.component';

describe('TiendaDetailsComponent', () => {
  let component: TiendaDetailsComponent;
  let fixture: ComponentFixture<TiendaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
