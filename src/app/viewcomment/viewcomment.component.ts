import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcomment',
  templateUrl: './viewcomment.component.html',
  styleUrls: ['./viewcomment.component.css']
})
export class ViewcommentComponent implements OnInit {
  name:string;
  price:number;
  author: string;
  comments: Bookcomment[]=[];
  book:Book;
  index: number = 0;

  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get('bookid'));
    this.svc.books
  }

}
