import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = new BehaviorSubject(false);
  logoutUser() {
    this.isLoggedIn.next(false);
  }
  loginUser() {
    this.isLoggedIn.next(true);
  }

  private user = new BehaviorSubject<any>(null);
  castUser = this.user.asObservable();
  
  editUser(newUser:any){
    this.user.next(newUser); 
  }
}
