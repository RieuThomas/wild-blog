import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbnail } from './article-thumbnail.component';

describe('ArticleThumbnail', () => {
  let component: ArticleThumbnail;
  let fixture: ComponentFixture<ArticleThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleThumbnail],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleThumbnail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
