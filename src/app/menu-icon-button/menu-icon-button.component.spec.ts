import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconButtonComponent } from './menu-icon-button.component';

describe('MenuIconButtonComponent', () => {
  let component: MenuIconButtonComponent;
  let fixture: ComponentFixture<MenuIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
