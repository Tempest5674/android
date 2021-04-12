import { Component } from '@angular/core';
import { Author, DataGetterService } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authors: Author[];

  showNew = false;
  showEdit = -1;

  userName: string;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getAuthors().subscribe(
      (data)=>{
        this.authors = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add(){
    this.showNew = true;
  }

  addAuthor(author){
    this.dataGetter.addAuthor(author);
    this.showNew = false;
  }

  delete(index: number){
    this.dataGetter.deleteAuthor(index);
  }
}
