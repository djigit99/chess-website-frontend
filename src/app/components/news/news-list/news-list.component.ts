import { Component, OnInit } from '@angular/core';
import {News} from "../../../models/News";
import {NewsService} from "../../../services/news/news.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  allNewsList!: News[];
  selectedNewsList!: News[];
  numberOnPage: number = 3;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.allNewsList = this.newsService.getNews();
    console.log(this.allNewsList);
    this.selectedNewsList = this.allNewsList.slice(0, this.numberOnPage)
  }

  logPage(event: PageEvent) {
    console.log(event)
  }

  updateSelectedPages(event: PageEvent) {
    let from: number = event.pageIndex * event.pageSize;
    let to: number = from + event.pageSize;
    this.selectedNewsList = this.allNewsList.slice(from, to);
  }
}
