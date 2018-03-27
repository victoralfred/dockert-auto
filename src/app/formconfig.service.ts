import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  
};

@Injectable()
export class FormconfigService {

  constructor(private http: HttpClient) { }

    createDocker(docker) {
        //  let body = JSON.stringify(docker);
        return this.http.post('http://127.0.0.1:5002/instance', 
        docker, httpOptions);
          }
 

}
