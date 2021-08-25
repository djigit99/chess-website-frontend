import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../models/Event";

@Component({
  selector: 'app-events-tile',
  templateUrl: './events-tile.component.html',
  styleUrls: ['./events-tile.component.css']
})
export class EventsTileComponent implements OnInit {
  @Input() event!: Event;

  constructor() { }

  ngOnInit(): void {
    console.log("event: " + this.event)
  }

}
