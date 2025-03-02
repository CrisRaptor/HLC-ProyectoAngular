import { Component } from '@angular/core';
import { TiendaListComponent } from "../../features/tienda/components/tienda-list/tienda-list.component";

@Component({
  selector: 'app-inicio',
  imports: [TiendaListComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
