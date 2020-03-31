import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private GITHUB_API_URL = "https://jobs.github.com/positions.json?page=1&search=code";

  constructor(private httpClient: HttpClient) { }

  public getGithubJobs(){
    return this.httpClient.get(this.GITHUB_API_URL);
  }
}
