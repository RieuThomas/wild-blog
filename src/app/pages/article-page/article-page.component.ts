import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.models';
import { Observable } from 'rxjs';
import { ArticleThumbnail } from '../../article-thumbnail/article-thumbnail.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleThumbnail, AsyncPipe],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePage {
  private route = inject(ActivatedRoute)
  http = inject(HttpClient)

  article$!:Observable<Article>
  articleId!: number

  getArticleById(id: number){
    this.article$ = this.http.get<Article>(`http://localhost:3000/articles/${id}`)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.getArticleById(this.articleId)
    });

  }
}
