import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
   headers: new HttpHeaders().set('Content-Type', 'multiart/form-data')
};
httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
httpOptions.headers.set('Content-Type', 'application/json');

@Injectable()
export class FormconfigService {

  constructor(private http: HttpClient) { }

    createDocker(docker) {
      return this.http.put('http://127.0.0.1:5002/instance',docker, httpOptions).subscribe
      (
        (response)=>{
          console.log(response)
        },
        (error)=>{
          console.log(error)
        }
      );
     
  }

}

