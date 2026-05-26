import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/contact.models';


@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPage {

  newContact: Contact = {
    lastname:"",
    firstname:"",
    email:"",
  };

  onSubmit():void {
    console.log(this.newContact)
  }
}
