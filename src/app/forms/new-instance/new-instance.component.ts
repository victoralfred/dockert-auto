import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormconfigService } from './../../formconfig.service';
import { NgForm } from '@angular/forms';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-new-instance',
  templateUrl: './new-instance.component.html',
  styleUrls: ['./new-instance.component.scss']
})
export class NewInstanceComponent implements OnInit {
  @ViewChild('signupform') signup: NgForm;
  selectDefault = 'v1';
   
  constructor(private _formserv: FormconfigService) { }

  ngOnInit() {
  }
  onSubmitSignUp() {
    let formdata ={
      email : this.signup.value.email,
      dockerinstance :this.signup.value.instance,
      version : this.signup.value.versionGroup.version
    }
    this._formserv.createDocker(formdata).subscribe(
        response => {
                  // refresh the list
                   console.log(response)
                   return true;
                 },
                 error => {
                   console.error("Error saving food!");
                  return Observable.throw(error);
               }
        
      );
      }

}
