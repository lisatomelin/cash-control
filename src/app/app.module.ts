import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './views/dashboard/dashboard.module';

import { provideHttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    

    CoreModule,
    DashboardModule,
  ],
  providers: [
    provideHttpClient(),
    
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },

    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
