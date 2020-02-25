import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from './interceptors/base.interceptor';
import { ErrorHandelerInterceptor } from './interceptors/error-handeler.interceptor';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => '',
        whitelistedDomains: ['testapi.jarpiscloud.nl']
      }
    }),
    AuthModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandelerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
