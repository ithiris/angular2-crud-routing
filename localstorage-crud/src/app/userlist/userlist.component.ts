import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../usermodel';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:User []
  
 private subscription:Subscription
  constructor(private userlistService:UserlistService) { }

  ngOnInit() {
    this.users = this.userlistService.getUserList();
    this.subscription = this.userlistService.userChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
  }

  onEditItem(index: number) {
    this.userlistService.startedEditing.next(index);
   }

   
  
}

