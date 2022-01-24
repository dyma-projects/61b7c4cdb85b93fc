import { UserService } from './../shared/services/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser(username)
      this.el.nativeElement.value = '';
    }
    console.log(this.userService.users$.value);

  }
}
