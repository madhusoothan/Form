import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public passwordMatch:boolean=true;
  public formSubmitted:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitHandler(form:NgForm):void{
    this.formSubmitted=true;
    if (form.invalid){
      alert("error");
      return;
   }
   if(form.value.password !=form.value.password2){
     this.passwordMatch=true;
     return;
   }
   this.passwordMatch=false;
    alert("Successfully!");
  }

}
