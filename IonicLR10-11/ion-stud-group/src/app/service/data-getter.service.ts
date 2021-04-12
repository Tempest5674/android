import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Author{
  name: string;
  dateOfBirth: string;
  numberOfBooks: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private authors: Author[] = [
    {
      name:"TestAuthorName1",
      dateOfBirth:"01.01.21",
      numberOfBooks: 1
    },
    {
      name:"TestAuthorName2",
      dateOfBirth:"01.01.22",
      numberOfBooks: 2
    }
  ]

  private userName = '';

  private users = [
    'TestUser', 'TestUser2', 'TestUser3'
  ];

  constructor() { }

  getAuthors():Observable<Author[]>{
    return of(this.authors);
  }

  addAuthor(author: Author){
    this.authors.push(author);
  }

  deleteAuthor(index){
    this.authors.splice(index,1);
  }

  getUser(){
    return this.userName;
  }

  setUser(name: string){
    this.userName = name;
  }

  userExists(name:string):boolean{
    return this.users.indexOf(name)!==-1;
  }
}
