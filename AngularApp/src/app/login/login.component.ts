import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, ValidatorFn, AbstractControlOptions } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService} from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '1';
  loginForm: FormGroup;
  constructor(private router: Router,
              // tslint:disable-next-line: no-shadowed-variable
              private RegisterService: RegisterService,
              private activatedRoute: ActivatedRoute) {
      this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
     }

  ngOnInit(): void {
    localStorage.setItem('token', this.user);
  }
  // tslint:disable-next-line: typedef
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  // tslint:disable-next-line: typedef
  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.RegisterService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['']);
          },
          error => { }
        );
    }
  }

  // tslint:disable-next-line: typedef
  movetoregister() {
    this.router.navigate(['../register'], { relativeTo: this.activatedRoute });
  }
}


