import { Component, OnInit } from '@angular/core';
import {Puzzle} from "../../../models/Puzzle";
import {PuzzleService} from "../../../services/puzzle/puzzle.service";

@Component({
  selector: 'app-puzzle-list',
  templateUrl: './puzzle-list.component.html',
  styleUrls: ['./puzzle-list.component.css']
})
export class PuzzleListComponent implements OnInit {

  puzzles!: Puzzle[];

  constructor(private puzzleService:PuzzleService) { }

  ngOnInit(): void {
    this.puzzles = this.puzzleService.getPuzzles();
  }

}
