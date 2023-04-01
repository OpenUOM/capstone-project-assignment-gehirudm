import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../../app-service.service';
import { Teacher } from 'src/app/models/model';
@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {

  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  teacherData: Teacher[] = [];
  selected: String = 'Teachers';

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getTeacherData();
  }

  addNewTeacher() {
    this.router.navigate(['addTeacher'])
  }

  editTeacher(id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    };
    this.router.navigate(['editTeacher'], navigationExtras)
  }

  getTeacherData() {
    this.selected = 'Teachers';
    this.service.getTeacherData().subscribe({
      next: (response) => { this.teacherData = response },
      error: (error) => console.log(error)
    })
  }

  search(value: string) {
    let foundItems: Teacher[] = [];
    if (value.length <= 0) {
      this.getTeacherData();
    } else {
      this.teacherData.filter((teacher) => {
        if (teacher.name.toLowerCase().indexOf(value) > -1) {
          foundItems.push(teacher)
        }
      });
      this.teacherData = foundItems;
    }
  }

  deleteTeacher(id: number) {
    const test = {
      id
    }

    this.service.deleteTeacher(test).subscribe(() => {
      this.getTeacherData()
    })
  }
}