import { Injectable } from '@angular/core';
import { Tienda } from '../models/tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url = "http://localhost:3000/tiendas";

  async getAllTiendas(): Promise<Tienda[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTiendaById(id: string): Promise<Tienda> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }
}
