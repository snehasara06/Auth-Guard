import { Component, OnInit } from '@angular/core';
import { AuthGuardServiceService } from '../Services/auth-guard-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user='1';
  constructor() { }

  ngOnInit(): void {
  
  localStorage.setItem('SessionUser',this.user);
  }
}
