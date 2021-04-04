import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base/base-table/base-table.component';
import { BaseFormComponent } from './base/base-form/base-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './base/services/base.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [BaseTableComponent, BaseFormComponent],
  imports: [
    CommonModule,
    // MatButtonModule,
    // MatRippleModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTooltipModule,
  ], exports: [
    BaseTableComponent,
    ReactiveFormsModule,
    BaseFormComponent,
  ], providers: [BaseService]
})
export class SharedModule {
  static forRoot() {
    return {
      declarations: [BaseTableComponent,BaseFormComponent],
      NgModule: SharedModule, CommonModule,
      exports: [BaseTableComponent,BaseFormComponent], providers: [BaseService]
    }
  }
}
