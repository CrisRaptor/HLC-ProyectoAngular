import { Routes } from '@angular/router';
import { InicioComponent } from './shared/inicio/inicio.component';
import { GestorTiendaComponent } from './shared/gestor-tienda/gestor-tienda.component';
import { ProductoFormModificarComponent } from './features/producto/components/producto-form-modificar/producto-form-modificar.component';
import { ProductoFormCrearComponent } from './features/producto/components/producto-form-crear/producto-form-crear.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'Tiendas'
    },
    {
        path: 'tiendas/:id',
        component: GestorTiendaComponent,
        title: 'Tienda'
    },
    {
        path: 'modificar/:id',
        component: ProductoFormModificarComponent,
        title: 'Modificar producto'
    },
    {
        path: 'crear',
        component: ProductoFormCrearComponent,
        title: 'Crear producto'
    }
];
