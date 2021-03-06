import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/interfaces/book';
import { Book } from 'src/app/models/book';
import { IBookCategory } from 'src/app/interfaces/book-category';
import { FormGroup, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {
  categories: IBookCategory[] = [];
  book: IBook = new Book();
  @ViewChild('bookForm') bookForm
  ;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.bookCategory.subscribe((data: IBookCategory[]) => {
      if (data && data.length) {
        this.categories = data;
        this.setDefaultCategory();
      }
    })
  }

  setDefaultCategory() {
    if (this.categories.length) {
      this.book.category = this.categories[0].id;
    }
  }

  onAddBook(e) {
    this.bookForm.setValue({
      title: this.book.title.trim(),
      description: this.book.title.trim(),
      category: this.book.category
    });
    if (this.bookForm.invalid) {
      return;
    }

    e.preventDefault();
    this.bookService.addBook(this.book).subscribe(() => {
      this.book = new Book();
      this.bookForm.resetForm({
        category: this.categories[0].id
      });
    });
  }
}
