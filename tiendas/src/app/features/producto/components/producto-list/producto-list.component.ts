import { ChangeDetectorRef, Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from '../../../../core/models/producto.model';
import { ProductoService } from '../../../../core/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
  productoService: ProductoService = inject(ProductoService);
  tiendaSeleccionada: number = -1;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tiendaSeleccionada = +params['id'];
      this.cargarProductos();
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataChanged']) {
      this.cargarProductos();
    }
  }

  cargarProductos() {
    this.productoService.getProductosByTiendaId(this.tiendaSeleccionada).then((productosList: Producto[]) => {
      this.productos = productosList;
      this.changeDetectorRef.detectChanges();
    });
  }

  borrarProducto(id: number) {
    this.productoService.deleteProducto(id).then(() => {
      this.cargarProductos();
    });
  }
  
  editarProducto(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      this.router.navigate(['modificar', id], { queryParams: { tiendaId: this.tiendaSeleccionada, productoId: id } });
    }
  }
}