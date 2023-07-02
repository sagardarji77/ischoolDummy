import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from './dashboard.service';

export interface IAddress {
  city: string;
  state: string;
  country: string;
  country_code: string;
}
export interface ICourses {
  school_id: string;
  course_id: string;
  school_name: string;
  school_slug: string;
  name: string;
  degree: string[];
  tuition: {
    currency: string;
    value: number;
  };
  sacm_approved: boolean;
  duration: number;
  application_deadlines: {
    year: number;
    months: number[];
  }[];
  has_applied: boolean;
  is_application_deletable: boolean;
  is_shortlisted: boolean;
}

export interface ISchoolResults {
  id: string;
  slug: string;
  name: string;
  campus_name: string;
  is_main_campus: true;
  logo: string;
  address: IAddress;
  is_partner: boolean;
  account_info: {
    partnership_type: string[];
  };
  rank: {
    isc_regional: {
      min: number;
      max: number;
    };
    isc_global: {
      min: number;
      max: number;
    };
  };
  stats: {
    acceptance_rate: number;
    grad_kaplan_english_level: number;
    undergrad_kaplan_english_level: number;
  };
  courses_count: number;
  courses: ICourses[];
}

export interface IShools {
  data: {
    results: ISchoolResults[];
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
