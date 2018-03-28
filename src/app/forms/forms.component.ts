import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  data = [
      {'dockerImage' : './assets/images/docker.png'}
  ];
  openForm = false;
  message = '';
  constructor() { }

  ngOnInit() {
  }
    displayForm() {
       this.openForm = true;
        this.message = 'Double Click to Close';
  }
    hideForm() {
        this.openForm = false;
        this.message = '';
       }

}
