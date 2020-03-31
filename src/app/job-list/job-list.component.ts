import { Component } from '@angular/core';

import { jobs } from '../jobs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobs = jobs;

  share() {
    window.alert('The job has been shared!');
  }
}


