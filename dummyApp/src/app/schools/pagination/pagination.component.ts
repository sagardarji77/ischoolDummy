import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  paginationSize = 5;
  pageArray: number[] = [];
  searchCount = 30;
  itemsInPage = 10;
  noOfPage = Math.ceil(this.searchCount / this.itemsInPage);

  constructor() {}

  ngOnInit(): void {
    this.generatePaginationArray(3);
  }

  generatePaginationArray(currentPage: number) {
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
}
