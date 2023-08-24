import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudFormService } from '../stud-form.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor(private studService: StudFormService) {}
  studData: any = [];
  ngOnInit() {
    this.studService.getData().subscribe((values) => {
      console.log(values, 'getting values');
      this.studData.push(values);
    });
  }
  studSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.studService.postData(form.value);
    } else {
      console.log('form is not valid');
    }
  }
}
