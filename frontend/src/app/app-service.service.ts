import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Student, Teacher } from './models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    if(environment.production == false){
      this.ROOT_URL = 'test'
    }else{
      this.ROOT_URL = 'api'
    }
  }

  getTeacherData() : Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`/${this.ROOT_URL}/listTeachers`)
  }

  getStudentData() : Observable<Student[]>{
    return this.http.get<Student[]>(`/${this.ROOT_URL}/listStudents`)
  }

  getOneStudentData(payload: Object) : Observable<Student[]>{
    return this.http.post<Student[]>(`/${this.ROOT_URL}/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object) : Observable<Teacher[]>{
    return this.http.post<Teacher[]>(`/${this.ROOT_URL}/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object) : Observable<[]>{
    return this.http.post<[]>(`/${this.ROOT_URL}/addTeacher`, payload)
  }

  deleteTeacher(payload: Object) : Observable<[]>{
    return this.http.post<[]>(`/${this.ROOT_URL}/deleteTeacher`, payload)
  }

  editTeacher(payload: Object) : Observable<Teacher[]>{
    return this.http.post<Teacher[]>(`/${this.ROOT_URL}/editTeacher`, payload)
  }

  editStudent(payload: Object) : Observable<Student[]>{
    return this.http.post<Student[]>(`/${this.ROOT_URL}/editStudent`, payload)
  }

  addStudent(payload: Object) : Observable<[]>{
    return this.http.post<[]>(`/${this.ROOT_URL}/addStudent`, payload)
  }

  deleteStudent(payload: Object) : Observable<[]>{
    return this.http.post<[]>(`/${this.ROOT_URL}/deleteStudent`, payload)
  }
}