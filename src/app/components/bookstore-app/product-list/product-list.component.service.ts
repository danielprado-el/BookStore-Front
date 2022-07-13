import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Book } from "./model/Book";

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(){}

  getBook():Observable<any>{
    let bookArray = [
      {
        id: '1',
        name: 'Book1',
        price: 15.00,
        quantity: 5,
        category: 'action',
        img: 'img1'
      },
      {
        id: '2',
        name: 'Book2',
        price: 2.50,
        quantity: 1,
        category: 'action',
        img: 'img2'
      },
      {
        id: '3',
        name: 'Book3',
        price: 18.00,
        quantity: 2,
        category: 'action',
        img: 'img3'
      },
      {
        id: '4',
        name: 'Book4',
        price: 3.00,
        quantity: 4,
        category: 'action',
        img: 'img1'
      },
      {
        id: '5',
        name: 'Book5',
        price: 20.00,
        quantity: 3,
        category: 'action',
        img: 'img2'
      }
    ]

    return of(bookArray)
  }
}