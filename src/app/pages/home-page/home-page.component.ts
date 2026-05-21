import { Component } from '@angular/core';
import { ArticleList } from '../../components/article-list/article-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [ArticleList],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePage {}
