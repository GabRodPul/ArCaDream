import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/classes/User';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private headerTitleService: HeaderTitleService,
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Sobre nosotros')
  }
}
