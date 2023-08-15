import { Component, OnInit } from '@angular/core';

import {Product, CreateProductDTO, UpdateProductDTO} from '../../models/product.model'

import {StoreService} from '../../services/store.service'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = []

  products: Product[] = []

  total = 0

  showProductDetail = false;
  productChose: Product={
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: ''
    },
  };
    
  constructor( private storeService: StoreService, private productsService: ProductsService){
    this.myShoppingCart = this.storeService.getMyShoppingCart()
  }

  ngOnInit(): void {
    var i = 0
    this.productsService.getAllProduct().subscribe(data =>{
      console.log('data: ', data);
      for (const objeto of data) {
        objeto.images[0] = 'https://source.unsplash.com/random';
      }
      this.products=data
    })
  }

  onAddToShoppingCar( product: Product){
    // console.log('product: ', product);
    // this.myShoppingCart.push(product)
    // console.log('myShoppingCart: ',this.myShoppingCart);
    // this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)

    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()

  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail 
  }

  onShowDetail(id: string){
    console.log('id:------------------ ', id);
    this.productsService.getProduct(id).subscribe(data =>{
      console.log('data: ', data);
      // this.products=data
      this.toggleProductDetail()
      
      this.productChose= data
    })    
  }
  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Nuevo Producto',
      description: 'Nuevo producto de desctipcion',
      images: ['https://source.unsplash.com/random'],
      price: 1000,
      categoryId: 3

    }
    this.productsService.create(product).subscribe(data=>{
      console.log('data*************************: ', data);
      this.products.unshift(data)//agregar el objeto que llega al principio
    })
  }


  uptadeProduct(){

    const changes: UpdateProductDTO = {
      title: 'Producto a editar'
    }

    const id = this.productChose.id;
    this.productsService.update(id, changes).subscribe(data=>{
      console.log('data: update************** ', data);
      const productIndex = this.products.findIndex(item => item.id === this.productChose.id)
      this.products[productIndex] = data;

      this.toggleProductDetail()
    })
  }

  deleteProducts(){
    const id = this.productChose.id;

    this.productsService.delete(id).subscribe(data=>{
      console.log('data: delete************** ', data);
      const productIndex = this.products.findIndex(item => item.id === this.productChose.id)
      this.products.splice(productIndex,1);
      this.toggleProductDetail()
    })
  }



  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'EL mejor juguete',
  //     price: 565,
  //     image: 'https://static.platzi.com/media/user_upload/toy-a0d1c980-a8ce-4fa4-83d6-3b016999a162.jpg'
  //   },
  //   {
  //     id: '2',
  //     name: 'Bicicleta casi nueva',
  //     price: 356,
  //     image: 'https://static.platzi.com/media/user_upload/bike-143dcfe9-3190-49fd-88f7-d3bf74182072.jpg'
  //   },
  //   {
  //     id: '3',
  //     name: 'Colleción de albumnes',
  //     price: 34,
  //     image: 'https://static.platzi.com/media/user_upload/books-80160e05-d177-420b-89c5-01a97b2bdb76.jpg'
  //   },
  //   {
  //     id: '4',
  //     name: 'Mis libros',
  //     price: 23,
  //     image: 'https://static.platzi.com/media/user_upload/album-6f4213d5-1d2d-4e0f-96fe-edb36c3255b4.jpg'
  //   },
  //   {
  //     id: '5',
  //     name: 'Casita michi',
  //     price: 125,
  //     image: 'https://static.platzi.com/media/user_upload/house-034b0c04-eeff-42fa-b506-79f18f73ff90.jpg'
  //   },
  //   {
  //     id: '6',
  //     name: 'Lentes vintage',
  //     price: 82,
  //     image: 'https://static.platzi.com/media/user_upload/glasses-05350737-5831-4c98-be55-824399206dba.jpg'
  //   },
  // ];
}
