import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from '../../components/charts/charts.module';
import { HttpAuthenticationService } from '../../services/http/http-authentication.service';
import { EditorModule } from '../../components/editor/editor.module';

@NgModule({
  imports: [
    AppSharedModule,
    DashboardRoutingModule,
    ChartsModule,
    EditorModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    HttpAuthenticationService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
