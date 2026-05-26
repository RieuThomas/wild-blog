import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/contact.models';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactForm {
    newContact: Contact = {
      lastname:"",
      firstname:"",
      email:"",
    };
  
    onSubmit():void {
      console.log(this.newContact)
    }
}
