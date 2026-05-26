import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page.component';
import { ArticlePage } from './pages/article-page/article-page.component';
import { NotFoundPage } from './pages/not-found-page/not-found-page.component';
import { ContactPage } from './pages/contact-page/contact-page.component';
import { SignupPage } from './pages/signup-page/signup-page.component';

export const routes: Routes = [
    {path: "", component: HomePage},
    {path: "article/:id", component: ArticlePage},
    {path: "contact", component: ContactPage},
    {path: "signup", component: SignupPage},
    {path: "**", component: NotFoundPage}
];
