import { Component } from '@angular/core';
import { Article } from '../../models/article.models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [DatePipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleList {
  article : Article = {
    title: "Mon titre",
    content: 'Voici le contenu de l\'article.',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
  }
}
