import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IUser } from 'src/app/shared/interfaces';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: User;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute, 
              private dataService: DataService) { 
              }

  ngOnInit() {
  }

  // loginUser() {
  // 	this.user = new User();
  // 	this.user.username = this.username;
  // 	this.user.password = this.password;
  // 	this.dataService.getUserData(this.user).subscribe( (data) => {   this.setUserData(data) });
  // }

  // setUserData(data){
  //   if(data == null){
  //       alert('Invalid login attempt. Please try again.');
  //   } else{
  //     this.user = data;
  //     localStorage.setItem('currUser', JSON.stringify(this.user));
  //     if(this.user.role == 2){this.router.navigate(['mgr-home']);}
  //     else{this.router.navigate(['emp-home']);}
      
  //   }
  // }
  
  // loginSubmit() {
  //   console.log('oh hello');
  //   this.authService.authenticate(this.username, this.password, this.successful, this.failed);
  //   console.log(this.authService.authenticate);
  // }

  // successful() {
  //   console.log("login successful");
  //   return true;
  // }
  // failed() {
  //   console.log("login failed");
  //   return true;
  // }

}
