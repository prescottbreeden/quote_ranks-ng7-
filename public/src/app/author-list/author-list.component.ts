import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: any = [];
  errors: '';

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this._http.getAllAuthor().subscribe(response => {
      this.authors = response['data'];
    })
  }

  onDelete(id) {
    this._http.deleteAuthor(id).subscribe(response => {
      if (response['status'] == 200) { 
        this.loadAuthors();
      }
      else if (response['status'] == 418) { 
        this.errors = response['errors'];
      }
      else { 
        return this._router.navigate(['/404']); 
      }
    })
  }

}
