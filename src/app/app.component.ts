import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  nameFormControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);




}
