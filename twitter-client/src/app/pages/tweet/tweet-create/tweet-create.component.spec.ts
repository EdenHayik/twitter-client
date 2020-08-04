import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreateComponent } from './tweet-create.component';

describe('TweetCreateComponent', () => {
  let component: TweetCreateComponent;
  let fixture: ComponentFixture<TweetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
