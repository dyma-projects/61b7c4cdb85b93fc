import { UserService } from './../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  public usersSubscription : Subscription = new Subscription();

  constructor(private userService : UserService  ) { }

  ngOnInit() {
    this.usersSubscription.add(
      this.userService.users$.subscribe((users : string[]) => {
        this.users = users;
      })
    )
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
