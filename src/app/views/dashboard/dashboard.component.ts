import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Service} from '../../service.service';
import {User} from '../../container/user/user-schema';
import { Router } from '@angular/router';
import { count } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import {Student} from '../../container/student/student-schema'
import {Course} from '../../container/course/course-schema'

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  /*graphcs User*/
  constructor( private service: Service) { }
  total:number
  dataSourceGraphcs:number;
  user :User[];
  admin=0;
  guess=0;

  getUser() {
    this.service.getAllUsers().subscribe((res: User[]) =>{
      res.forEach(element => {
        if(element.profile == 'admin')
        {
            this.admin++;
        }
        else
        if(element.profile == 'guess')
        {
          this.guess++;
        }
      });
      this.barChart1Data = [
        {
          data: [this.admin,0],
          label: 'administrador',
        },
        {
          data: [this.guess,0],
          label: 'Convidados',
        }
      ];
      this.total = this.admin + this.guess
      console.log(this.dataSourceGraphcs);
      return this.dataSourceGraphcs;
      })
  }
 
  // barChart1
  public barChart1Data: Array<any> = [];
  public barChart1Labels: Array<any> = ['Usuários'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.8,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(84,255,87)',
      borderWidth: 0
    },
    {
      backgroundColor: 'rgba(255,237,14)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';
  
  
  /*graphcs Student*/
  public pieChartLabels: Array<any> = [];
  public pieChartData: Array<any> = [];
  public pieChartType = 'pie';
  courses = [];
  student=[];
  getStudent(){
      forkJoin(this.service.getAllStudent(),this.service.getAllCourse()).subscribe(res =>{
          let courses = res[1];
          let students = res[0];

          for(var aux=0;aux<courses.length;aux++)
          {
            let numStudents = 0;
            this.courses.push(courses[aux].name);

            for(var aux2=0;aux2<students.length;aux2++)
            {
                if(courses[aux].id == students[aux2].course[0].id)
                {
                  numStudents++;
                
                }
                // console.log(">>>>>",students[aux2]);
            }

            this.student.push(numStudents);
          }
          
      })  
      
    this.pieChartLabels = this.courses;
    this.pieChartData = this.student;
  }

 

  ngOnInit(): void {
    console.log(this.dataSourceGraphcs);
    // generate random values for mainChart
      this.getUser();
      this.getStudent();
    }
  
}
