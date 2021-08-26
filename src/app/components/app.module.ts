import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EventsTileComponent } from './events/events-tile/events-tile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { EventsListComponent } from './events/events-list/events-list.component';
import {RouterModule, Routes} from "@angular/router";
import { PuzzleCardComponent } from './puzzles/puzzle-card/puzzle-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PuzzleListComponent } from './puzzles/puzzle-list/puzzle-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'training', component: PuzzleListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NewsListComponent,
    NewsDetailComponent,
    EventsTileComponent,
    EventsListComponent,
    PuzzleCardComponent,
    PuzzleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [MatDatepickerModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
