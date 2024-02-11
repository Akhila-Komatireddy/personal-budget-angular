import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import * as d3 from 'd3';

import { DataService } from '../data.service';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  public dataSource: any = {
    datasets: [
        {
            data: [],
            backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#DDFF33',
              '#7733FF',
              '#33FF4F',
            ]
        }
    ],
    labels: []
};
    public chart: any;
    public svg: any;
    public pie: any;

    constructor( private http: HttpClient, private dataService: DataService ){}

    ngOnInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res:any) => {
          for (var i = 0; i < res.myBudget.length; i++) {
              this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
              this.dataSource.labels[i] = res.myBudget[i].title;
          }
          console.log(this.dataSource)
          this.createChart();
      });
    }

    createChart() {
        var ctx = document.getElementById('myChart') as HTMLCanvasElement;
        if( typeof ctx !== 'undefined' ){
            var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: this.dataSource
            });
        }
    }

    private getData() {
        const arr = [];
        const labels = this.dataSource.labels;
        for (let i = 0; i < this.dataSource.datasets[0].data.length; i++) {
            arr.push({
                label: labels[i],
                value: this.dataSource.datasets[0].data[i],
            });
        }
        return arr;
    }
}
