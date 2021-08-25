import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news/news.service";
import {News} from "../../../models/News";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @Input() news!: News;

  constructor() { }

  ngOnInit(): void {
    console.log(this.news);
  }

}
