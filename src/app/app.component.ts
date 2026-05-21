import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { ArticleList } from './components/article-list/article-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ArticleList ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('Bienvenue sur le Wild Blog de Thomas !');
}
