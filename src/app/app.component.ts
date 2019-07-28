import { Component, OnInit } from '@angular/core';

import {DatabaseService } from './database.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title = 'Digital Twin';

  public timestampData: any[];
  public gravityData: any[];
  public graphData: any[] = [];

  public displayedColumns: string[] = ['timestamp', 'gravity'];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'LineChart';

/*
  public barChartLegend = false;
  //public barChartLabels = this.labels;
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010'];

  public labels: any[] = [];
  public data: any[] = [];
/*
  public barChartData = [
    {data: [], label: 'Series A'}
  ];


  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];*/

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.getTimestampData();
    this.getGravityData();
    this.getGraphData();
  }

  getTimestampData():void {
    this.databaseService.getTimestampData()
      .subscribe(timestampData =>
        this.timestampData = timestampData
      );
  }

  getGravityData(): void {
    this.databaseService.getGravityData()
      .subscribe(gravityData =>
        this.gravityData = gravityData
      );
  }

  getGraphData():void {
    this.databaseService.getTimestampData()
      .subscribe(timestampData => {
        this.graphData = [];
        timestampData.forEach((element) => {
          this.graphData.push([new Date(element.timestamp*1000).toLocaleString(), element.gravity]);
        });
      });
  }


}
