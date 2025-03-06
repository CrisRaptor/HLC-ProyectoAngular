import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TiendaService } from '../../../../core/services/tienda.service';
import { ProductoService } from '../../../../core/services/producto.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tienda } from '../../../../core/models/tienda.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../../../core/models/producto.model';

@Component({
  selector: 'app-producto-form-modificar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-form-modificar.component.html',
  styleUrls: ['./producto-form-modificar.component.css']
})
export class ProductoFormModificarComponent {
  productoForm!: FormGroup;
  tiendas: Tienda[] = [];
  servicio_tiendas: TiendaService = inject(TiendaService);
  servicio_producto: ProductoService = inject(ProductoService);
  tiendaIdUrl: number | undefined;
  productoId: number | undefined

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarTiendas();
    this.productoForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
    this.route.queryParams.subscribe(params => {
      this.tiendaIdUrl = params['tiendaId'];
      this.productoId = params['productoId'];
    });
    if (this.productoId) {
      this.servicio_producto.getProductoById(Number(this.productoId)).then((producto: Producto | null) => {
        console.log(producto)
        if (producto) {
          this.productoForm.patchValue({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
          });
        } else {
          console.error('Producto no encontrado');
        }
      }).catch(error => {
        console.error('Error al cargar producto', error);
      });
    }
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
        this.servicio_producto.getProductoById(Number(this.productoId)).then((productoExistente: Producto | null) => {
          const tiendasAnteriores = productoExistente ? productoExistente.tiendas : [];

          this.productoForm.enable();
          const nuevoProducto: Producto = {
            nombre: this.productoForm.value.nombre,
            precio: this.productoForm.value.precio,
            tiendas: tiendasAnteriores,
            id: this.productoForm.value.id
          };
          this.productoForm.get('id')?.disable();

          this.productoService.updateProducto(nuevoProducto).then(
            response => {
              console.log('Producto actualizado con exito!', response);
              const tiendaId = this.route.snapshot.paramMap.get('id');
              this.router.navigate([`/tiendas/${tiendaId}`]);
            },
            error => {
              console.error('Error al actualizar producto', error);
            }
          );
        });
      });
    }
  }
}
