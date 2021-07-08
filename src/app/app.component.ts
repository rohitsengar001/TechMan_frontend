import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './Custom-Validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-app';
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit () {
    this.registerForm = this.formbuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['',Validators.required],
      tandC: ['false',Validators.requiredTrue],
    }, {
      validators: PasswordChecker('password', 'confirmPassword'),
    });
  }

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    console.log(this.registerForm.value)

    alert("Signup Success\n" + JSON.stringify(this.registerForm.value))
  }

  onResetForm(){
    this.submitted = false;
    this.registerForm.reset();
  }
}




