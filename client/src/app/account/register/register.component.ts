import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { map, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  errors: string[] = [];

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {

  }
  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [null,
        [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],
        [this.ValidateEmailNotTaken()]
      ],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/shop');
      },
      error: (err) => {
        console.log(err);
        this.errors = err.errors;
      }
    });
  }
  /*<0, Observable<{
    emailExists: boolean;
} | null>>*/
  ValidateEmailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control?.value) {
            console.log("val:" + control?.value);
            return of(null);
          }
          return this.accountService.checkEmailExists(control?.value).pipe(
            map(res => {
              console.log("val:" + control?.value);
              return res ? { emailExists: true } : null;
            })
          );
        })
      );
    }
  }
}
