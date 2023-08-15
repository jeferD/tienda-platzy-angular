import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string  = 'https://young-sands-07814.herokuapp.com/api/products';
  // private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api';
  constructor(private http: HttpClient) {

  }

  getAllProduct(){
    return this.http.get<Product[]>(this.apiUrl)
  }
  getProduct(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
  create(dto: CreateProductDTO){
    //enviamos CreateProductDTO, pero al recibir obtenemos un objeto coon el modelo de Product
    return this.http.post<Product>(this.apiUrl, dto)
  }
  update(id: string, dto: UpdateProductDTO){
    //put enviar toda la info del producto
    //patch enviar solo el cambio de un atributo
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto)
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}
