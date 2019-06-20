import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './modules/shared.module';
import { AppComponent } from './app.component';
import { SidenavComponent, UserComponent, UsersListComponent, UserDetailComponent } from './components';

import { LayoutModule } from '@angular/cdk/layout';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './store/effects';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'users/:userId', component: UserDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    UserComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(appEffects),
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    SidenavComponent,
    UserComponent,
    UsersListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
