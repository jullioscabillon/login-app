import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {

  // dummy data example from https://api.myjson.com/bins/niw9u api
  users = [{'username': 'user1', 'password': 'userPassw1', 'name': 'Ben', 'surname': 'Clevermoth', 'age': 21, 'color': 'purple', 'properties': {'profiles': ['up_1', 'up_2', 'up_3', 'up_4', 'up_5'], 'role': 'admin'}}, {'username': 'user2', 'password': 'userPassw2', 'name': 'Carl', 'surname': 'Jonhson', 'age': 32, 'color': 'red', 'properties': {'profiles': ['up_1', 'up_2', 'up_3'], 'role': 'collab'}}, {'username': 'user3', 'password': 'userPassw3', 'name': 'Guendaline', 'surname': 'Rose', 'age': 16, 'color': 'green', 'properties': {'profiles': ['up_1'], 'role': 'user'}}];

  constructor() {}

  getUsers() {
    return this.users.slice();
  }

  addUser(user: any) {
    this.users.push(user);
    return true;
  }

  checkUser(username: string, password: string) {

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        return this.users[i];
      }
    }

    return false;
  }

}
