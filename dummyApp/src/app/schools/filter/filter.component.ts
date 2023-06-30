import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const dummyData = {
  title: 'country',
  list: [
    { country: 'Australia', states: ['state1', 'state2', 'state3'] },
    { country: 'India', states: ['state1', 'state2', 'state3'] },
    { country: 'USA', states: ['state1', 'state2'] },
    { country: 'Canada', states: ['state1', 'state2', 'state3'] },
    { country: 'China', states: ['state1', 'state2', 'state3'] },
    { country: 'Japan', states: ['state1', 'state2'] },
  ],
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterSearchForm!: FormGroup;
  data = dummyData;
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
