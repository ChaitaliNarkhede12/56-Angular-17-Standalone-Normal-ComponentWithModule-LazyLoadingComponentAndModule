import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [
    StudentComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomesModule { }
