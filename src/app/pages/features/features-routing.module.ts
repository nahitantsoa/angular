import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {FeaturesLayoutComponent } from "./features-layout.component";
import {StudentsComponent } from "./students/students.component";
import {CourseComponent} from './course/course';
import { CommunicationComponent } from "./communication/communication.component";
import { from } from "rxjs";
import { Router } from "express";
const routes: Routes = [
    { 
      path: '', 
      component: FeaturesLayoutComponent,
      children: [
        // Sous-menu STUDENTS
        { path: 'students', component: StudentsComponent },
        
        // Sous-menu COURSE miaraka aminy EQT (sous-sous-menu)
        { 
          path: 'course', 
          children: [
            { path: 'edt', component: CourseComponent }
          ] 
        },
              
      // Sous-menu COMMUNICATION
      { path: 'communication', component: CommunicationComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule{}