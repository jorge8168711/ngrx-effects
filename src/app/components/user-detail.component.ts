import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { UserState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { GetUser } from '../store/actions';

@Component({
  selector: 'app-user-detail',
  template: /*html*/ `
    <p *ngIf="(userState$ | async)?.loading; else noLoading">Loading...</p>

    <ng-template #noLoading>
      <mat-card>
        <mat-card-title>
          {{
            (userState$ | async)?.user.first_name
            + ' '
            + (userState$ | async)?.user.last_name
          }}
        </mat-card-title>
        <mat-card-subtitle>{{ (userState$ | async)?.user.email }}</mat-card-subtitle>

        <mat-card-content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae beatae explicabo quod saepe enim quidem voluptas, obcaecati assumenda, dolorum veritatis eum blanditiis numquam natus voluptatibus quia est ex ipsam ipsum?
        </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: [ /*css*/ `
    .mat-card { width: 320px; }
  `]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  public title = 'Hello UserDetail';
  public userState$: Observable<UserState>;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.params.subscribe(params => {
      this.store.dispatch(new GetUser(params.userId));
      this.userState$ = this.store.select('user');
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
