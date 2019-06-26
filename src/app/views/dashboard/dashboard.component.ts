import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Service} from '../../service.service';
import {User} from '../../container/user/user-schema';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor( private service: Service) { }

  dataSource:User[];
  user : User[];
  num = 0;

  getUser(){
    this.service.getAllUsers().subscribe(res=>{
      this.dataSource=res;
      console.log(this.dataSource);
      })
      this.num = this.dataSource.length
  }

  // barChart1
  public barChart1Data: Array<any> = [
    {
     
      data: [11,12,0],
      label: 'Usuário'
    }
  ];
  public barChart1Labels: Array<any> = ['Administrador', 'Convidado'];
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
      backgroundColor: 'rgba(255,255,255)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

 

  ngOnInit(): void {
    // generate random values for mainChart
  
    }
  
}
