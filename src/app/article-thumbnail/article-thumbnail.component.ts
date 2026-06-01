import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article.models';
import { DatePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
    imports: [DatePipe, NgClass, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss',
})
export class ArticleThumbnail {

  @Input() article:Article = {
    title: '',
    content: '',
    image: '',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: '',
    id: 0,
    isLiked: false,
  }

  @Output() isLikedChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  changeIsLiked() {
    this.isLikedChange.emit(!this.article.isLiked)
    console.log(this.article.isLiked)
  }
}
