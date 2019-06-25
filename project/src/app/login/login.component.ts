import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../guard';
import { AlarmService} from '../alarm'

@Component({selector:'login',templateUrl: 'login.component.html'})
export class Logincomponent implements OnInit{
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alarmService: AlarmService) {}
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            gebruiksnaam: ['', Validators.required],
            wachtwoord: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get getter() { 
        return this.loginForm.controls;
     }
    
     onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.getter.gebruiksnaam.value, this.getter.wachtwoord.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alarmService.error(error);
                    this.loading = false;
                });
    }
    
}