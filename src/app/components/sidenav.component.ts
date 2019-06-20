import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { UiState } from '../store/reducers/ui.reducer';

@Component({
  selector: 'app-sidenav',
  encapsulation: ViewEncapsulation.None,
  template: /*html*/ `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport="true"
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="!(isHandset$ | async)">

        <mat-toolbar>Menu</mat-toolbar>

        <mat-nav-list>
          <a mat-list-item routerLink="/">Users</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>

          <span>Effects example</span>
        </mat-toolbar>

        <mat-progress-bar mode="query"
          *ngIf="(uiState$ | async)?.appIsLoading;"></mat-progress-bar>

        <main class="main">
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [ /*css*/ `
    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 200px;
    }

    .sidenav .mat-toolbar {
      background: inherit;
    }

    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .sidenav-search {
      font-size: 12px;
      margin-left: auto;
    }

    .sidenav-search .mat-form-field-appearance-outline .mat-form-field-wrapper {
      padding: 0;
      margin: 0;
    }
  `]
})
export class SidenavComponent implements OnInit {
  public uiState$: Observable<UiState>;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.uiState$ = this.store.select('ui');
    });
  }

  public search(event: any) {
    console.log(event.target.value);
  }
}
