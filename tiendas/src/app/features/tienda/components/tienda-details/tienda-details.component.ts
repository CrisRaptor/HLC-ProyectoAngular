import { ChangeDetectorRef, Component, inject, SimpleChanges } from '@angular/core';
import { Tienda } from '../../../../core/models/tienda.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from '../../../../core/services/tienda.service';
import { ProductoListComponent } from "../../../producto/components/producto-list/producto-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-details',
  imports: [ProductoListComponent, CommonModule],
  templateUrl: './tienda-details.component.html',
  styleUrl: './tienda-details.component.css'
})
export class TiendaDetailsComponent {

  tienda: Tienda | undefined;
  servicio_tiendas: TiendaService = inject(TiendaService);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.cargarTienda(params['id']);
    });
  }

  async cargarTienda(id: string) {
    this.tienda = await this.servicio_tiendas.getTiendaById(id);
    this.changeDetectorRef.detectChanges();
  }

  irACrearProducto() {
    this.router.navigate(['crear']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataChanged']) {
      this.cargarTienda(this.route.snapshot.params['id']);
    }
  }
}
