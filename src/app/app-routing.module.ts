import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/news/main/main.component";
import {AddingNewsComponent} from "./pages/news/edit/adding-news.component";
import {NewsDetailsComponent} from "./pages/news/details/news-details.component";
import {NewsResolver} from "./providers/news.resolver";
import {DeletingNewsComponent} from "./pages/news/remove/deleting-news.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SearchComponent} from "./pages/categories/search/search.component";
import {CategoryResolver} from "./providers/category.resolver";


const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'add',
  component: AddingNewsComponent,
}, {
  path: 'edit/:id',
  component: AddingNewsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
}, {
  path: 'remove/:id',
  component: DeletingNewsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
}, {
  path: 'details/:id',
  component: NewsDetailsComponent,
  resolve: {
    newsResolver: NewsResolver
  }
}, {
  path: 'search/:id',
  component: SearchComponent,
  resolve: {
    categoryResolver: CategoryResolver
  }
}, {
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
