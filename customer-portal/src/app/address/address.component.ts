import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  isSubmitted: boolean;
  @ViewChild('f') signUpForm: NgForm;
  genders = ["Male", "Female", "Other"];
  user = {
    username : '',
    email: '',
    secret: '',
    gender: 'male'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.isSubmitted = true;
    this.user.username = this.signUpForm.value.username;
    this.user.email = this.signUpForm.value.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.gender = this.signUpForm.value.gender;
  }

  suggestedName() {
  const suggestName = "Sasha Banks";
  this.signUpForm.form.patchValue(
    {
      username : suggestName
    }
  )
  }
}
