import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formsubmitted:boolean=false;
  public passwordMatch:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{
    this.formsubmitted=true;
    if(form.invalid){
      alert("Error")
      return;
  }
    if(form.value.password != form.value.password2){
      this.passwordMatch=true;
      return;
    }
    this.passwordMatch=false;
    alert("Successfully")
  }

}
