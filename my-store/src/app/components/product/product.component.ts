import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product ={
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: ''
    },
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  constructor(){

  }
  ngOnInit(): void{

  }
  onShowDetail(){
    this.showProduct.emit(this.product.id)
  }

  onAddToCart(){
    this.addedProduct.emit(this.product)//enviar el producto 
  }
}
