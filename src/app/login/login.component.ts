import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  onLogin(formData: any) {
    console.log('User Data:', formData);
    alert('Log in successful! Email: ' + formData.email);

}}
