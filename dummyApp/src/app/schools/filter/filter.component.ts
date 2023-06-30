import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterSearchForm!: FormGroup;
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.initializeFilterForm();
  }

  initializeFilterForm() {
    this.filterSearchForm = new FormGroup({
      filterSearch: new FormControl('', [Validators.required]),
    });
  }
}
