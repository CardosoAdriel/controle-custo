import { Injectable } from '@angular/core';

import { Produto } from './produto';

interface Product {
  id: number,
  produto: string,
  preco: number
}

const returnData: Product[] = [
  {id: 1, produto: 'Geladeira', preco: 199},
  {id: 2, produto: 'Notebook', preco: 2500},
  {id: 3, produto: 'Console PS5', preco: 5000},
]

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  produtos!: string;

  constructor() { }

  setDataService(data: any) {

    this.produtos = data;

    return this.produtos
  }

  getDataService(): any {

    return this.produtos
  }

}


