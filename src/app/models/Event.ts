import {User} from "./User";

export class Event {
  id!: number;
  title!: string;
  description!: string;
  date!: Date;
  visitors: User[] = [];

  constructor(id: number, title: string, description: string, date: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }

  public addUser(user: User): void {
    this.visitors.push(user);
  }

  public getDate(): string {
    let month = this.date.getMonth();
    let month_ukr;
    switch (month) {
      case 1:
        month_ukr = 'Лютий';
        break;
      case 2:
        month_ukr = 'Березень';
        break;
      case 3:
        month_ukr = 'Квітень';
        break;
      case 4:
        month_ukr = 'Травень';
        break;
      case 5:
        month_ukr = 'Червень';
        break;
      case 6:
        month_ukr = 'Липень';
        break;
      case 7:
        month_ukr = 'Серпень';
        break;
      case 8:
        month_ukr = 'Вересень';
        break;
      case 9:
        month_ukr = 'Жовтень';
        break;
      case 10:
        month_ukr = 'Листопад';
        break;
      case 11:
        month_ukr = 'Грудень';
        break;
      default:
        month_ukr = 'Січень';
    }
    return this.date.getDate() + " " + month_ukr + ", " + this.date.getFullYear();
  }

  clone(): Event {
    let clon = new Event(this.id, this.title, this.description, this.date);
    clon.visitors = this.visitors;
    return clon;
  }
}
