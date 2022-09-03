import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  mail = new FormControl('hoge@example.com', [
    Validators.required,
    Validators.email,
  ]);
  passwd = new FormControl('', [Validators.required, Validators.minLength(4)]);

  modelForm = this.builder.group({
    mail: this.mail,
    passwd: this.passwd,
  });

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit', this.mail, this.passwd);
  }
}
