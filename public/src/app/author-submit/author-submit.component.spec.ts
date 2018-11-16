import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSubmitComponent } from './author-submit.component';

describe('AuthorSubmitComponent', () => {
  let component: AuthorSubmitComponent;
  let fixture: ComponentFixture<AuthorSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
