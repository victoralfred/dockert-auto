import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormconfigService } from './../../formconfig.service';
import { NgForm } from '@angular/forms';
import { DockerData } from './new-instance.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-new-instance',
  templateUrl: './new-instance.component.html',
  styleUrls: ['./new-instance.component.scss']
})
export class NewInstanceComponent implements OnInit {
  @ViewChild('signupform') signup: NgForm;
  selectDefault = 'v1';
    message: any = '';
  // getINstancedata : Observable<DockerData[]>;
  constructor(private _formserv: FormconfigService) { }
  ngOnInit() {
  }
  onSubmitSignUp() {
      const data: DockerData = {
        email: this.signup.value.email,
        instance: this.signup.value.instance,
        version: this.signup.value.versionGroup.version
      }
      this._formserv.createDocker(data).subscribe
      (
          (response) => {
              this.message =  response;
          },
          (error) => {
              this.message =  error;
          }
      );
      }

}
