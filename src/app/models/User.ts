export class User {
  id!: number;
  name!: string;
  surname!: string;
  role: Role;

  constructor(id: number, name: string, surname: string, role: Role = Role.USER) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.role = role;
  }
}

enum Role {
  USER, MOD, ADMIN
}
