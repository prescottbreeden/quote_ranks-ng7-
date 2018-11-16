import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  authorId = '';
  editAuthor = { name: '' };
  errors = '';

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.authorId = params['id'];
      this.getAuthor();
    })
  }

  getAuthor() {
    this._http.getAuthor(this.authorId).subscribe(response => {
      if (response['status'] == 200) { this.editAuthor = response['data']; } 
      else if (response['status'] == 418) { this.errors = response['errors']; } 
      else { return this._router.navigate(['/404']); }
    });
  }

  onEdit() {
    this._http.editAuthor(this.authorId, this.editAuthor).subscribe(response => {
      if (response['status'] == 200) { this._router.navigate(['/']); } 
      else if (response['status'] == 418) { this.errors = response['errors']; } 
      else { return this._router.navigate(['/404']); }
    })
  }
}
