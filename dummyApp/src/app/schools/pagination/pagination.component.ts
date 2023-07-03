import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() searchCount!: number;
  pageArray: number[] = [];
  paginationSize = 5;
  itemsInPage = 10;
  noOfPage = Math.ceil(this.searchCount / this.itemsInPage);
  currentPage = 1;

  constructor() {}

  ngOnInit(): void {
    this.generatePaginationArray(this.currentPage);
  }

  generatePaginationArray(currentPage: number) {
    this.pageArray = [];
    let left = 1;
    let right = this.noOfPage;
    if (this.noOfPage >= this.paginationSize) {
      const noToLeftRight = Math.floor(this.paginationSize / 2);

      if (currentPage - noToLeftRight < 1) {
        right = this.paginationSize;
      } else if (currentPage + noToLeftRight > this.noOfPage) {
        left = this.noOfPage - this.paginationSize + 1;
      } else {
        left = currentPage - noToLeftRight;
        right = currentPage + noToLeftRight;
      }
    }
    for (let i = left; i <= right; i++) {
      this.pageArray.push(i);
    }
  }

  getCurrentPage(event: MouseEvent) {
    const target = event.target as HTMLSpanElement;
    const value = target.getAttribute('value');
    if (value) {
      if (value == 'lt') {
        this.currentPage = this.currentPage - 1;
      } else if (value == 'gt') {
        this.currentPage = this.currentPage + 1;
      } else {
        this.currentPage = parseInt(value);
      }
      this.generatePaginationArray(this.currentPage);
    }
    console.log(this.currentPage);
  }
}
