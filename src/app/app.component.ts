import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: Object;

  constructor(private appserv: AppService) {

    this.appserv.getdata().subscribe((data) =>

      this.options = {
        chart: {
          type: 'spline',
          zoomType: 'x'
        },
        title: {
          text: 'Wind Speed'
        },
        xAxis: {
          type: 'null',         //datetime
          labels: {
            overflow: 'justify'
          }
        },
        yAxis: {
          title: {
            text: 'm/s'
          }
        },

        plotOptions: {
          spline: {
            marker: {
              enabled: false
            }
          }
        },
        series: data,
        navigation: {
          menuItemStyle: {
            fontSize: '10px'
          }
        }
      }
    );
  }
}

