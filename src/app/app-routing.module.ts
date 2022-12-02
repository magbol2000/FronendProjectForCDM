import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AddingNewsComponent} from "./pages/adding-news/adding-news.component";
import {NewsDetailsComponent} from "./pages/news-details/news-details.component";
import {NewsResolver} from "./providers/news.resolver";
import {DeletingNewsComponent} from "./pages/deleting-news/deleting-news.component";

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'adding-news',
  component: AddingNewsComponent,
},{
  path: 'adding-news/:id',
  component: AddingNewsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
},{
  path: 'deleting-news/:id',
  component: DeletingNewsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
}, {
  path: 'news-details/:id',
  component: NewsDetailsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
}
// todo 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
