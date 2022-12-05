import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<Product>;

  constructor() {
    this.products=[
      {id:1, name:"Computer", price :6500},
      {id:2, name:"Printer", price :1200},
      {id:3, name:"Smart phone", price :5000},
    ];
  }

  public getAllProducts() : Observable<Array<Product>>{
    let rnd=Math.random();
    if(rnd<0.5) return throwError(()=> new Error("Internet connexion error"));

    else return of(this.products);
  }

  public deleteProduct(id : number) : Observable<boolean>{
    this.products=this.products.filter(p=>p.id!=id);
    return of(true);
  }
}
