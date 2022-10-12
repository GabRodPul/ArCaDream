import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from './shared/classes/User';

@Component({
  viewProviders: [MatIconRegistry],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ArCaDream';

  constructor(
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    let icons = [
      'sobre',
      'ajustes', 'ajustes-checked',
      'busqueda', 'busqueda-checked',
      'carrito', 'carrito-checked',
      'usuario', 'usuario-checked',
      'logo', 'logo-checked',
    ];

    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(icon,
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/' + icon + '.svg'));
    });
  
      // this.iconRegistry.addSvgIcon('busqueda',
      // this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/busqueda.svg'));
  }

  setHeader() {
    this.title = decodeURIComponent(this.router.url.split('/')[1]);
  }
}
