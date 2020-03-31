import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: JobListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    JobListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


