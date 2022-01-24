import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$?: BehaviorSubject<String[]> = new BehaviorSubject([]);

  public addUser(user : string) {
    this.users$.subscribe((users : string[]) => {
      users.push(user);
    })
  }

  constructor() { }
}
