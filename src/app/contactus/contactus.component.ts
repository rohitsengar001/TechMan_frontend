import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ifError } from 'assert';
import { logWarnings } from 'protractor/built/driverProviders';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup
  data = {
    'name': "",
    "email": "",
    "message": ""
  }
  flagMessage: boolean=false;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.nullValidator]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'message': new FormControl(null, [Validators.required, Validators.maxLength(80), Validators.nullValidator])
    })
  }
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  sendMessage() {
    console.log("send message is working");
    this.data.name = this.contactForm.get("name").value;
    this.data.email = this.contactForm.get("email").value;
    this.data.message = this.contactForm.get("message").value;
    console.log(this.data);
    try {

      this.contactService.doContact(this.data).subscribe(info => {

        console.log("send message return", info)
        this.flagMessage = true;
      }
      )
    }
    catch (err) {
      this.flagMessage = false;
      console.warn(err);
    }
    this.contactForm.reset();
  }
}
