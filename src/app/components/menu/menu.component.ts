import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/classes/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() userToken = 0;

  constructor() { }

  ngOnInit(): void { }

}
