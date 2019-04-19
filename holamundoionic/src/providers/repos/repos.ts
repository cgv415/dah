import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Repo} from '../../models/repo';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ReposProvider {
  username: string;

  constructor(public http: Http) {}

  getRepos(username): Observable<Repo[]> {
    return this.http.get(`https://api.github.com/users/${username}/repos`).map(res => <Repo[]>res.json());
  }

}
