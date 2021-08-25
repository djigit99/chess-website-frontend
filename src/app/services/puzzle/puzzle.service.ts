import { Injectable } from '@angular/core';
import {Puzzle} from "../../models/Puzzle";

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor() { }

  getPuzzles(): Puzzle[] {
    let puzzle = new Puzzle(
      1,
      "Знайдіть виграш за білих (5 очків).",
      "/puzzles/1roz_20.jpg",
      "",
      ["Kgf5"]);
    return [puzzle];
  }
}
