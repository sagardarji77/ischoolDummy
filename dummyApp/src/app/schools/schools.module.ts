import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [DashboardComponent, FilterComponent, SchoolCardComponent, PaginationComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SchoolsModule {}
