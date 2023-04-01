import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';

const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'editTeacher', component: EditTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
