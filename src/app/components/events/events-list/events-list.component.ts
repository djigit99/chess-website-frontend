import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../models/Event";
import {PageEvent} from "@angular/material/paginator";
import {EventService} from "../../../services/event/event.service";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  allEventsList!: Event[];
  displayedEventsList!: Event[];
  numberOnPage: number = 3;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.allEventsList = this.eventService.getEvents();
    console.log(this.allEventsList);
    this.displayedEventsList = this.allEventsList.slice(0, this.numberOnPage)
  }

  logPage(event: PageEvent) {
    console.log(event)
  }

  updateDisplayedPages(event: PageEvent) {
    let from: number = event.pageIndex * event.pageSize;
    let to: number = from + event.pageSize;
    this.displayedEventsList = this.allEventsList.slice(from, to);
  }
}
