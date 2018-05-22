import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public user: Object;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.data['user']['data'];
  }

  ngOnInit() {
  }

}
