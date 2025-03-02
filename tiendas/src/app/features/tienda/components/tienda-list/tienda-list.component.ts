import { ChangeDetectorRef, Component, inject, SimpleChanges } from '@angular/core';
import { Tienda } from '../../../../core/models/tienda.model';
import { TiendaService } from '../../../../core/services/tienda.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda-list',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './tienda-list.component.html',
  styleUrl: './tienda-list.component.css'
})
export class TiendaListComponent {
  tiendas: Tienda[] = [];
  servicio_tiendas: TiendaService = inject(TiendaService);
  tiendaSeleccionada: number = -1;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.tiendaSeleccionada = +params['id'];
    });
  }

  ngOnInit() {
    this.cargarTiendas();
  }

  cargarTiendas() {
    this.servicio_tiendas.getAllTiendas().then((tiendaList: Tienda[]) => {
      this.tiendas = tiendaList;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataChanged']) {
      this.cargarTiendas();
    }
  }
}
