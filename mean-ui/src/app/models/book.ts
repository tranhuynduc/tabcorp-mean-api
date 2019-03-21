import { IBook } from "../interfaces/book";

export class Book implements IBook{
  id: string;
  title: string;
  description: string;
  category: string;

  constructor(id = '', title = '', category = '', desccription = '') {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = desccription;
  }
}
