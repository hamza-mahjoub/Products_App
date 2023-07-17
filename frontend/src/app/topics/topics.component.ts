import { Component } from '@angular/core';
import { TopicsService } from './services/topics.service';
import { NotifierService } from 'angular-notifier';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  standalone: true,
})
export class TopicsComponent {
  topics = [];
  public chart: any;

  constructor(
    private readonly topicsService: TopicsService,
    private readonly notifier: NotifierService
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.topicsService.getAllTopics().subscribe(
      (fetchedTopics) => {
        this.topics = fetchedTopics.data.topics.edges;
        this.createChart();
      },
      (error) => {
        this.notifier.notify('error', error.message);
      }
    );

  }

  createChart() {

    let colors = [];
    for (let i = 0; i < 20; i++) {
      let r = Math.floor(Math.random()*(255 + 1));
      let g = Math.floor(Math.random()*(255 + 1));
      let b = Math.floor(Math.random()*(255 + 1));

      let hr = r.toString(16).padStart(2, '0');
      let hg = g.toString(16).padStart(2, '0');
      let hb = b.toString(16).padStart(2, '0');
      colors.push("#" + hr + hg + hb)
    }

    let data: number[] = [];
    let labels: string[] = [];

    for (let i = 0; i < this.topics.length; i++) {
      data.push(this.topics[i]['node']['postsCount'])
      labels.push(this.topics[i]['node']['name'])
    }

    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Topics',
            data,
            backgroundColor: colors,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
