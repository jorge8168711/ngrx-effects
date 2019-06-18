import { Component, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user',
  template: /*html*/ `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar
          [ngStyle]="{ background: getAvatarStyle(user?.avatar) }"></div>

          <mat-card-title>
          {{ user?.first_name + ' ' + user?.last_name }}
        </mat-card-title>
        <mat-card-subtitle>{{ user?.email }}</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <strong>ID:</strong> {{ user?.id }}
      </mat-card-content>
    </mat-card>
  `,
  styles: [ /*css*/ `
    .title { color: tomato; }

    .mat-card {
      margin-bottom: 30px;
    }
  `]
})
export class UserComponent {
  public user: User = null;

  @Input('userData') set userData(user: User) {
    console.log(user);
    this.user = user;
  }

  constructor() {}

  public getAvatarStyle(url: string): string {
    return `transparent url(${url}) center/cover no-repeat`;
  }
}
