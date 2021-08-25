export class Puzzle {
  id!: number;
  description!: string;
  imageUrl!: string;
  userFirstMove!: string;
  correctFirstMoves!: string[];

  constructor(id: number, description: string, imageUrl: string, userFirstMove: string, correctFristMoves: string[]) {
    this.id = id;
    this.description = description;
    this.imageUrl = imageUrl;
    this.userFirstMove = userFirstMove;
    this.correctFirstMoves = correctFristMoves;
  }
}
