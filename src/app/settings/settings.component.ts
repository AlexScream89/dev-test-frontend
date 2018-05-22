import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from './shared/providers/settings.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public user: User;
  public editUserForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.user = this.route.snapshot.data['user'];
    console.log('user', this.user);
    this.createForm();
  }

  ngOnInit() {
  }

  public submitForm(): void {
    if (this.editUserForm.invalid) {
      console.log('invalid', this.editUserForm);
      return;
    }

    console.log(this.editUserForm.value);
    this.updateUser(this.editUserForm.value);
  }

  private updateUser(data: Object): void {
    this.settingsService.updateUser(this.user.id, data)
      .subscribe(res => {
        console.log('update user', res);
      });
  }

  private createForm(): void {
    this.editUserForm = this.fb.group({
      'firstName': [this.user.firstName],
      'lastName': [this.user.lastName],
      'email': [this.user.email, [Validators.required, Validators.email]],
      'password': [this.user.password],
      'repeatPassword': ['']
    });
  }

}
