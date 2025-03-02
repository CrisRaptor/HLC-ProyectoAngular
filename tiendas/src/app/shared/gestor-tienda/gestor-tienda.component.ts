import { Component } from '@angular/core';
import { TiendaListComponent } from "../../features/tienda/components/tienda-list/tienda-list.component";
import { TiendaDetailsComponent } from '../../features/tienda/components/tienda-details/tienda-details.component';

@Component({
  selector: 'app-gestor-tienda',
  imports: [TiendaListComponent, TiendaDetailsComponent],
  templateUrl: './gestor-tienda.component.html',
  styleUrl: './gestor-tienda.component.css'
})
export class GestorTiendaComponent {

}
