import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { IBook } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { IBookCategory } from 'src/app/interfaces/book-category';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  @Input() book: IBook;
  categories: IBookCategory[] = [];

  constructor(
    private bookService: BookService

  ) { }

  ngOnInit() {
    this.bookService.bookCategory.subscribe((data: IBookCategory[]) => this.categories = data)

  }

  getCategory(id: string) {
    if (!id) return;
    
    const category = this.categories.find(category => category.id === id);
    return category.name;
  }

  onDelete(id) {
    this.bookService.deleteBook(id).subscribe();
  }
}
