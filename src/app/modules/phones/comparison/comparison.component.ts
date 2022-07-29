import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Item } from 'src/app/shared/models/item';
import { ComparisonService } from '../services/comparison.service';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit, OnDestroy {
  items: Item[] = []
  itemList: Item[] = []
  private onDestroy$ = new Subject<boolean>();
  selectedTabIndex = 0;
  constructor(private comparisonService: ComparisonService) { }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete()
  }

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.comparisonService.getData()
      .pipe(
        takeUntil(this.onDestroy$))
      .subscribe(data => {
        this.items = data;
        this.itemList = JSON.parse(JSON.stringify(data));

      }, error => {
        console.log(error);

      })

  }
  onTabChanged() {
    if (this.selectedTabIndex == 3) {
      this.items = this.itemList.filter(x => x?.rating >= 4);
      return;
    }
    if (this.selectedTabIndex == 1) {
      this.items = this.itemList.filter(x => x?.new);
      return;
    }
    this.items = this.itemList;

  }
}
