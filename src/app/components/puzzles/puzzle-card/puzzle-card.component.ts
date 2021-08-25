import {Component, Input, OnInit} from '@angular/core';
import {Puzzle} from "../../../models/Puzzle";

@Component({
  selector: 'app-puzzle-card',
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.css']
})
export class PuzzleCardComponent implements OnInit {

  @Input() puzzle!: Puzzle;

  constructor() { }

  ngOnInit(): void {
  }

}
