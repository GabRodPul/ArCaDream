import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-icon-button',
  templateUrl: './menu-icon-button.component.html',
  styleUrls: ['./menu-icon-button.component.scss']
})
export class MenuIconButtonComponent implements OnInit {
  
  @Input() checkedIcon = '';
  @Input() uncheckedIcon = '';  
  @Input() routeUrl = '';
  @Input() logged: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  get isAppInRoute(): boolean { return this.router.url === this.routeUrl; }

  warningNotLogged() {
    Swal.fire({
      title: 'Función no disponible',
      text: 'Las funciones de Búsqueda y Carrito están reservadas para usuarios que han iniciado sesión. ¿Desea hacerlo ahora?',
      icon: 'warning',
      confirmButtonText: 'Iniciar sesión'
    })
    .then ( answer => {
      this.router.navigateByUrl('login');
    })
  }
}
