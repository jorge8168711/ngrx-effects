import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialdModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialdModule
  ],
  exports: [
    CommonModule,
    MaterialdModule
  ]
})
export class SharedModule {}
