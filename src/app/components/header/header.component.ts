import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'XD';

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.title.subscribe(updatedTitle => {
        this.title = updatedTitle
    });
  }
}
