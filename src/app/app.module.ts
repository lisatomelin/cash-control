import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { TransacoesFormsComponent } from './views/transacoes/transacoesForms/transacoesForms.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,

    CoreModule,
    DashboardModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
