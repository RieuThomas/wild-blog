import { Component } from '@angular/core';
import { SignupComponent } from '../../components/signup-component/signup-component.component';

@Component({
  selector: 'app-signup-page',
  imports: [SignupComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPage {}
