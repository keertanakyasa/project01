import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, ValidatorFn, AbstractControlOptions } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService} from '../services/register.service';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  myForm: FormGroup;
  // tslint:disable-next-line: ban-types
  successMessage: String = '';
  // passValidator: ValidatorFn | ValidatorFn[] | AbstractControlOptions;


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private RegisterService: RegisterService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });

this.myForm.controls.password.valueChanges
      .subscribe(
   x => this.myForm.controls.cnfpass.updateValueAndValidity()
);

      }
// tslint:disable-next-line: typedef
ngOnInit() {
}
  // tslint:disable-next-line: typedef
  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  // tslint:disable-next-line: typedef
  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }
  register(): void {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this.RegisterService.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'SOme error'
        );
    }
  }

  // tslint:disable-next-line: typedef
  movetologin() {
    this.router.navigate(['../login']);
  }
}



