import {comment1} from './comment/comment.modal'
export class Book {
    id:number;
    author:string;
    title: string;
    price:number;
    comment:comment1[] = [];
    

constructor(id:number, author:string, title:string, price:number){
    this.id = id;
    this.author = author;
    this.title= title;
    this.price = price;
}
}
