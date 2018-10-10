import { Injectable } from '@angular/core';
import {User} from './usermodel'
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserlistService {
 startedEditing =new Subject <number>();
 userChanged = new EventEmitter <User[]>();
users :User[] = [
  new User('manoj', 23 ,'manoj@gmail.com','male'),
  new User('gopi', 25 ,'gopi@gmail.com','male')
]

  User =JSON.parse(localStorage.getItem("users"))

  constructor() { }

  getUserList(){
    return this.users.slice();
  }
  getUserData(index:number){
    return this.users[index];
  }

  addUserList(user:User){

    this.users.push(user);
this.userChanged.emit(this.users.slice());

    let newNote =JSON.stringify(this.users);
    localStorage.setItem("users",newNote);

  }

  updateUserList(index:number,newUser:User){

    this.users[index]=newUser;
    this.userChanged.next(this.users.slice());
  }

  deleteList(index:number){
    this.users.splice(index,1);
    this.userChanged.next(this.users.slice())
  }
}
