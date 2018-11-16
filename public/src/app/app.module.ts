import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorSubmitComponent } from './author-submit/author-submit.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorEditComponent,
    AuthorListComponent,
    AuthorSubmitComponent,
    QuoteEditComponent,
    QuoteListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
