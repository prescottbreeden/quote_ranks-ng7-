import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  addQuote = false;
  errors = '';
  button = 'Add a Quote';
  authorId: string;
  content = '';
  author;

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.authorId = params['id'];
      this.loadAuthor()
    });
  }

  loadAuthor() {
    this._http.getAuthor(this.authorId).subscribe(response => {

      if(response['status'] == 200) {
        this.author = response['data'];
      } 
      else if(response['status'] == 418) {
        this.errors = response['errors'];
      } 
      else {
        return this._router.navigate(['/404']);
      }
    });
  }

  onAddQuote() {
    this._http.editAuthor(
      this.authorId, 
      {$push: {quotes: {content: this.content} } }
    ).subscribe(response => {
      if(response['status'] == 200) {
        this._router.navigate(['/']);
      } 
      else if(response['status'] == 418) {
        this.errors = response['errors'];
      } 
      else {
        return this._router.navigate(['/404']);
      }
    });
  }

  onDeleteQuote(index) {
    this.author.quotes.splice(index, 1);
    this._http.editAuthor(this.authorId, this.author).subscribe(response => {
      if(response['status'] == 200) {
        this.loadAuthor();
      } 
      else if(response['status'] == 418) {
        this.errors = response['errors'];
      } 
      else {
        return this._router.navigate(['/404']);
      }
    });
  }

}
