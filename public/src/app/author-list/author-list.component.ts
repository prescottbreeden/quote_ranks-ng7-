import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: any = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this._http.getAllAuthor().subscribe(response => {
      this.authors = response['data'];
    })
  }

}
