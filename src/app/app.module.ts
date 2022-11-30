import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { BarLinksComponent } from './components/bar-links/bar-links.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ShortNewsOfTheDayComponent } from './components/short-news-of-the-day/short-news-of-the-day.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { NewsDashboardComponent } from './components/news-dashboard/news-dashboard.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { TagsComponent } from './components/tags/tags.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AddingNewsComponent } from './pages/adding-news/adding-news.component';
import { FullNewsComponent } from './components/full-news/full-news.component';
import { ShortNewsComponent } from './components/short-news/short-news.component';
import { ReplyComponent } from './components/reply/reply.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentSendingFormComponent } from './components/comment-sending-form/comment-sending-form.component';
import { NewsSendingFormComponent } from './components/news-sending-form/news-sending-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutSiteComponent,
    MenuComponent,
    NavComponent,
    BarLinksComponent,
    CategoriesListComponent,
    LayoutComponent,
    ShortNewsOfTheDayComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
