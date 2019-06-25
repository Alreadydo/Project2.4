import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { Alarmcomponent } from './alarm';
import { AuthGuard } from './guard';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlarmService } from './alarm'
import { AuthenticationService} from './guard'
import { UserService} from './model'
import { HomeComponent } from './home';
import { Logincomponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        Alarmcomponent,
        HomeComponent,
        Logincomponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlarmService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }