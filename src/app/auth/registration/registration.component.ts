import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../shared/providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {}

  public submitForm(): void {
    console.log('form value', this.registrationForm.value);

    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.registration(this.registrationForm.value)
      .subscribe(res => {
        this.router.navigate(['/auth', 'login']);
        console.log('res', res);
      });
  }

  private createForm(): void {
    this.registrationForm = this.fb.group({
      'firstName': [''],
      'lastName': [''],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'repeatPassword': ['', [Validators.required]]
    });
  }

}
