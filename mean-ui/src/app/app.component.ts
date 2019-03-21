import { Component, OnInit } from '@angular/core';
import { IBook } from './interfaces/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bookList: IBook[] = [];
  title = 'mean-ui';

  constructor(
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    this.bookService.getBookCategory().subscribe();
    this.bookService.getBooks().subscribe()
    this.getBookList();  
  }

  getBookList() {
    this.bookService.bookList.subscribe(data => this.bookList = data);
  }
}
