import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-author-submit',
  templateUrl: './author-submit.component.html',
  styleUrls: ['./author-submit.component.scss']
})
export class AuthorSubmitComponent implements OnInit {
  newAuthor = {
    name: ''
  };
  errors = '';

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onCreate() {
    if (this.newAuthor.name.length < 3) {
      this.errors = 'Author names must be longer than 3 characters';
      return;
    }
    this._http.createAuthor(this.newAuthor).subscribe(response => {
      console.log(response);
      if (response['status'] == 201) { return this._router.navigate(['/'])}
      else if (response['status'] == 418) { this.errors = response['errors'] })
      else { return this._router.navigate(['/404']); }
    })
  }

}
