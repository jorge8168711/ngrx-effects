import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent, UserComponent, UsersListComponent } from './components';
import { SharedModule } from './modules/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user/:userId', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    UserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
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
