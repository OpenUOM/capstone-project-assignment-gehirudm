import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import { Teacher } from 'src/app/models/model';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {


  teacherData: any;


  constructor(private service: AppServiceService, private router: Router) { }

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getTeacherData();
  }

  getTeacherData() {
    if (this.navigation?.extras.state) {
      let teacher = {
        id: this.navigation.extras.state["id"]
      }
      this.service.getOneTeacherData(teacher).subscribe(
        {
          next: (response) => { this.teacherData = response[0] },
          error: (error) => console.error(error)
        }
      )
    }
  }

  editTeacher(values: Teacher) {
    if (this.navigation?.extras.state) {
      values.id = this.navigation.extras.state["id"];
      this.service.editTeacher(values).subscribe(
        {
          next: (response) => { this.teacherData = response[0] },
          error: (error) => console.error(error)
        }
      )
    }
  }

}