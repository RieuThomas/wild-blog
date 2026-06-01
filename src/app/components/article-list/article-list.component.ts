import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../models/article.models';
import { ArticleThumbnail } from '../../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnail, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleList implements OnInit {

articles$!: Observable<Article[]>

http = inject(HttpClient)

getArticles() {
  this.articles$ = this.http.get<Article[]>("http://localhost:3000/articles")
}

ngOnInit(): void {
  this.getArticles()
}
}
