import { Component, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user',
  template: /*html*/ `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar
          [ngStyle]="{ background: setAvatarImage(userData?.avatar) }"></div>

          <mat-card-title>
          {{ userData?.first_name + ' ' + userData?.last_name }}
        </mat-card-title>

        <mat-card-subtitle>{{ userData?.email }}</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <strong>ID:</strong> {{ userData?.id }}
      </mat-card-content>
    </mat-card>
  `,
  styles: [ /*css*/ `
    .mat-card {
      margin-bottom: 30px;
    }
  `]
})
export class UserComponent {
  @Input() public userData: User;

  constructor() {}

  public setAvatarImage(url: string): string {
    return url
      ? `transparent url(${url}) center/cover no-repeat`
      : 'transparent url(assets/account_placeholder.svg) center/cover no-repeat';
  }
}
