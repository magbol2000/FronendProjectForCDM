import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/news/main/main.component';
import {AboutSiteComponent} from './components/about-site/about-site.component';
import {MenuComponent} from './components/menu/menu.component';
import {NavComponent} from './components/nav/nav.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {LayoutComponent} from './components/layout/layout.component';
import {GeneralNewsComponent} from './components/general-news/general-news.component';
import {SocialMediaComponent} from './components/social-media/social-media.component';
import {NewsDashboardComponent} from './components/news-dashboard/news-dashboard.component';
import {AdditionalInfoComponent} from './components/additional-info/additional-info.component';
import {TagsComponent} from './components/tags/tags.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {AddingNewsComponent} from './pages/news/edit/adding-news.component';
import {FullNewsComponent} from './components/full-news/full-news.component';
import {ShortNewsComponent} from './components/short-news/short-news.component';
import {ReplyComponent} from './components/reply/reply.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentSendingFormComponent} from './components/comment-sending-form/comment-sending-form.component';
import {NewsSendingFormComponent} from './components/news-sending-form/news-sending-form.component';
import {CommentComponent} from './components/comment/comment.component';
import {NewsDetailsComponent} from './pages/news/details/news-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeletingNewsComponent} from './pages/news/remove/deleting-news.component';
import {FilterCategoriesPipe} from './pipes/filter-categories.pipe'
import {NotFoundComponent} from './pages/not-found/not-found.component'
import {NotifyComponent} from "./components/notify/notify.component";
import {SearchComponent} from './pages/categories/search/search.component';
import {CommentRemoveComponent} from './pages/comments/comment-remove/comment-remove.component';
import {FormErrorComponent} from './components/form-error/form-error.component';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutSiteComponent,
    MenuComponent,
    NavComponent,
    CategoriesListComponent,
    LayoutComponent,
    GeneralNewsComponent,
    SocialMediaComponent,
    NewsDashboardComponent,
    AdditionalInfoComponent,
    TagsComponent,
    PaginationComponent,
    AddingNewsComponent,
    FullNewsComponent,
    ShortNewsComponent,
    ReplyComponent,
    CommentsComponent,
    CommentSendingFormComponent,
    NewsSendingFormComponent,
    CommentComponent,
    NewsDetailsComponent,
    DeletingNewsComponent,
    FilterCategoriesPipe,
    NotFoundComponent,
    NotifyComponent,
    SearchComponent,
    CommentRemoveComponent,
    FormErrorComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
