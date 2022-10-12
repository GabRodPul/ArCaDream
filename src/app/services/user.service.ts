import { Injectable } from '@angular/core';
import { User } from '../shared/classes/User';
import { LoginResult } from '../shared/enums/LoginResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User = User.emptyUser();
  users: User[];

  constructor() {
    this.users = require('../../database/users.json');
  }

  get isUserLogged(): boolean { return this.currentUser.fullname === '' };


  findUser(userToFind: User): User {
    let usersFound = this.users.filter(user => user.username === userToFind.username);

    if (usersFound.length == 0) return User.emptyUser();  // User not found

    return usersFound[0];
  }

  userExists(user: User): boolean {
    return this.findUser(user).username !== '';
  }

  registerUser(newUser: User): boolean {
    if (this.userExists(newUser)) return false;

    this.users.push(newUser);
    return true;
  }

  login(username: string, password: string): LoginResult {
    let loginParams = new User(username, '', password);
    let userQuery = this.findUser(loginParams);

    if (userQuery.username === '') return LoginResult.UserNotFound;
    if (userQuery.password !== loginParams.password) return LoginResult.InvalidPassword;

    this.currentUser = userQuery;
    return LoginResult.Success;
  }

  logout() {
    this.currentUser = User.emptyUser();
  }
}
