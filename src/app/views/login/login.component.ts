import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private headerTitleService: HeaderTitleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle("Iniciar sesión")
  }


}
