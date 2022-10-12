import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/shared/classes/ContactForm';

import { FormsModule } from '@angular/forms';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: ContactForm;

  constructor(
    private headerTitleService: HeaderTitleService
  ) {
    this.contactForm = new ContactForm();
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Contáctenos')
  }

  public submit(): void {
  }
}
