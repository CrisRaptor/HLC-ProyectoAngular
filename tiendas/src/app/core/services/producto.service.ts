import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url = "http://localhost:3001/productos";

  async getAllProductos(): Promise<Producto[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductoById(id: number): Promise<Producto | null> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? null;
  }

  async getProductosByTiendaId(id: number): Promise<Producto[]> {
    const data = await fetch(this.url);
    const productos: Producto[] = await data.json() ?? [];
    return productos.filter(producto => producto.tiendas.includes(Number(id)));
  }

  async createProducto(producto: Producto): Promise<Producto> {
    const data = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(producto),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await data.json() ?? {};
  }

  async updateProducto(producto: Producto): Promise<Producto> {
    console.log(producto)
    const data = await fetch(`${this.url}/${producto.id}`, {
      method: 'PUT',
      body: JSON.stringify(producto),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await data.json() ?? {};
  }

  async deleteProducto(id: number): Promise<Producto> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    return data.json();
  }

  constructor() { }
}
