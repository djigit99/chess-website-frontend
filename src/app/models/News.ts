export class News {
  id: number;
  title: string;
  description: string;
  likes: number;
  views: number;

  constructor(id: number, title: string, description: string, likes: number, views: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.likes = likes;
    this.views = views;
  }
}
