import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  public submitForm(): void {
    console.log('form value', this.loginForm.value);
  }

  public isInvalid(controlName: string): boolean {
    return this.loginForm.controls[controlName].touched && this.loginForm.controls[controlName].invalid;
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      'userEmail': ['', [Validators.required, Validators.email]],
      'userPassword': ['', Validators.required]
    });
  }

}
