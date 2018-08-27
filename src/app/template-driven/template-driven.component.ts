import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {Hero} from '../hero';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. This is used to provide mat errors on custom conditions*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})

export class TemplateDrivenComponent implements OnInit {

  powers = [
    'Really Smart',
    'Can Fly',
    'Fast'
  ];
  model = new Hero(18, '', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form);
  }

  newHero() {
    this.model = new Hero(42, 'asd', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
