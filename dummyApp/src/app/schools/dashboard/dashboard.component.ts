import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from './dashboard.service';

export interface IShools {
  data: {
    results: any[];
    total: number;
    total_courses_count: number;
  };
  message: string;
  status_code: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  searchForm!: FormGroup;
  colleges!: IShools;
  filters!: any[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getSchools();
    this.getFilters();
  }

  initializeForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });
  }

  getSchools() {
    this.dashboardService.getSchools().subscribe(
      (data) => {
        this.colleges = data;
        console.log(data);
        console.log(this.colleges);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getFilters() {
    this.dashboardService.getFilters().subscribe(
      (data) => {
        this.filters = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
