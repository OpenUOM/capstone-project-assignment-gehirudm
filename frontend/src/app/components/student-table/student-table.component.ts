import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../../app-service.service';
import { Student } from 'src/app/models/model';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  studentData: Student[] = [];
  selected: any;

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  addNewStudent() {
    this.router.navigate(['addStudent'])
  }

  editStudent(id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        id
      }
    };
    this.router.navigate(['editStudent'], navigationExtras)
  }

  getStudentData() {
    this.service.getStudentData().subscribe({
      next: (response) => { this.studentData = response },
      error: (error) => console.error(error),
    })
  }

  deleteStudent(itemid: number) {
    const student = {
      id: itemid
    }
    this.service.deleteStudent(student).subscribe(() => {
      this.getStudentData()
    })
  }

  search(value: string) {
    let foundItems:Student[] = [];
    if (value.length <= 0) {
      this.getStudentData();
    } else {
      this.studentData.filter((student) => {
        if (student.name.toLowerCase().indexOf(value) > -1) {
          foundItems.push(student)
        }
      });
      this.studentData = foundItems;
    }
  }
}
