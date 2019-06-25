import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlarmService} from '../alarm';
import { UserService } from '../model'
@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alarmService: AlarmService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            voornaam   : ['', Validators.required],
            achternaam: ['', Validators.required],
            gebruiksnaam: ['', Validators.required],
            wachtwoord: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get getter() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alarmService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alarmService.error(error);
                    this.loading = false;
                });
    }
}