import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgClass, NgForOf} from '@angular/common';
import {StudentsComponent} from './students.component';
import {FormComponent} from './form/form.component';
import {ListComponent} from './list/list.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../app.module';



@NgModule({
  declarations: [StudentsComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    NgForOf,
    FormsModule,
    NgClass,
  ],
  exports: [
    StudentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsModule { }
