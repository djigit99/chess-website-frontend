import { Injectable } from '@angular/core';
import {Puzzle} from "../../models/Puzzle";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor(private http: HttpClient) {}

  getPuzzles(): Array<Puzzle> {
    const URL = 'http://localhost:8080/puzzle';

    let puzzles: Array<Puzzle> = new Array<Puzzle>();
    this.http.get<Puzzle[]>(URL)
      .subscribe(puzzle => {
        puzzle.forEach(val => puzzles.push(val));
      });
    return puzzles;
  }
}
