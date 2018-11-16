import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorSubmitComponent } from './author-submit/author-submit.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: AuthorListComponent },
  { path: 'authors/new', component: AuthorSubmitComponent },
  { path: 'authors/edit/:id', component: AuthorEditComponent },
  { path: 'authors/quotes/:id', component: QuoteListComponent },
  { path: 'authors/edit/:id/:idx', component: QuoteEditComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
