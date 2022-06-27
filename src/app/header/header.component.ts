import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(public aS: AuthService,
  private  router:Router) { }
  loginStatus: any
  ngOnInit() {

    // this.aS.isLoggedIn.subscribe((status) => {
    //   this.loginStatus = status;
    // });

    this.aS.castUser.subscribe(user =>
    
     {
      console.log(user)
      this.user = user
     }
      
      );

  }

  // login() {
  //   this.aS.loginUser();
  // }

  logout() {
    this.user=null
    this.router.navigate([''])
  }

  adminLogin(){
this.router.navigate(['adminLogin'])
  }

}
