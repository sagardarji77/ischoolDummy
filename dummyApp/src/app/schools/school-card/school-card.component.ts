import { Component, Input, OnInit } from '@angular/core';
import { ISchoolResults } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.scss'],
})
export class SchoolCardComponent implements OnInit {
  @Input() schools!: ISchoolResults;

  constructor() {}

  ngOnInit(): void {}
}
