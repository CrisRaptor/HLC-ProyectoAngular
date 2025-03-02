import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../../core/services/producto.service';
import { CommonModule } from '@angular/common';
import { Tienda } from '../../../../core/models/tienda.model';
import { TiendaService } from '../../../../core/services/tienda.service';
import { Producto } from '../../../../core/models/producto.model';

@Component({
  selector: 'app-producto-form-crear',
  templateUrl: './producto-form-crear.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./producto-form-crear.component.css']
})
export class ProductoFormCrearComponent implements OnInit {
  productoForm!: FormGroup;
  tiendas: Tienda[] = [];
  servicio_tiendas: TiendaService = inject(TiendaService);
  servicio_producto: ProductoService = inject(ProductoService);

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
  ) { }

  ngOnInit(): void {
    this.cargarTiendas();
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      tiendasSeleccionadas: [[], Validators.required]
    });
  }

  cargarTiendas() {
    this.servicio_tiendas.getAllTiendas().then((tiendaList: Tienda[]) => {
      this.tiendas = tiendaList;
    });
  }

  onSubmit(): void {
    console.log(this.productoForm.valid);
    if (this.productoForm.valid) {
      this.productoService.getAllProductos().then((productos: Producto[]) => {
        const maxId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) : 0;
        const producto: Producto = {
          nombre: this.productoForm.value.nombre,
          precio: this.productoForm.value.precio,
          tiendas: this.productoForm.value.tiendasSeleccionadas.map((tienda: any) => Number(tienda)),
          id: maxId + 1
        };

        this.productoService.createProducto(producto).then(
          response => {
            console.log('Producto creado con exito!', response);
          },
          error => {
            console.error('Error al crear producto', error);
          }
        );
      });
    }
  }
}
