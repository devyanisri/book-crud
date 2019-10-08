import { Component, OnInit } from '@angular/core';
import { comment1 } from './comment.modal';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  email: string;
  comment: string;
  user: comment1;
  index: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = (parseInt(this.route.snapshot.paramMap.get('id')) - 1);
    
  }
  
  submit() {
    console.log(this.index);
    console.log(this.svc.books[this.index]);
    this.svc.books[this.index].comment.push(new comment1(this.email, this.comment));
    console.log(this.svc.books);
  }
}