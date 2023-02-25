import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';

// import * as fromGuards from './guards';
// import * as fromInterceptors from './interceptors';
// import * as fromCoreService from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // DynamicDialogModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // DynamicDialogModule,
  ],
  // providers: [
  //   ...fromCoreService.coreServices,
  //   ...fromGuards.guards,
  //   ...fromInterceptors.interceptors,
  // ],
})
export class CoreModule {}
