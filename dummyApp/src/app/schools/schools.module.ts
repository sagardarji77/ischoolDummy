import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [DashboardComponent, FilterComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SchoolsModule {}
