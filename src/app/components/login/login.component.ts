import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

const {required, minLength} = Validators;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  annouce: string = "";
  loginForm = this.fb.group({
    username: new FormControl("", [required, minLength(3)]),
    password: new FormControl("", [required, minLength(3)]),

  });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "admin") {
      this.router.navigateByUrl("/admin").then(r => "/admin");
    } else
      this.annouce = "Wrong username or password";
    console.log("Wrong username or password")
  }

  reset() {
    // this.loginForm.value.username.patchValue("");
    // this.loginForm.value.password.patchValue("")
  }
}
