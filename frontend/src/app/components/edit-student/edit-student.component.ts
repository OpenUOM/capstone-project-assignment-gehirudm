import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import { Student } from 'src/app/models/model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentData: Student = {} as Student

  constructor(private service: AppServiceService, private router: Router) { }

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    if (this.navigation?.extras.state) {
      let student = {
        id: this.navigation.extras.state["id"]
      }
      this.service.getOneStudentData(student).subscribe(
        {
          next: (response) => { this.studentData = response[0] },
          error: (error) => console.error(error)
        }
      )
    }
  }

  editStudent(values: Student) {
    if (this.navigation?.extras.state) {
      values.id = this.navigation.extras.state["id"];
      this.service.editStudent(values).subscribe(
        {
          next: (response) => { this.studentData = response[0] },
          error: (error) => console.error(error)
        }
      )
    }
  }

}
