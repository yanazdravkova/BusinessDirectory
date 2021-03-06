import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Business } from 'src/app/models/business';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, OnDestroy {

  public businessArray: Business[] = [];
  public columnsToDisplay = ['name', 'description'];
  private subscriptions: Subscription[] = [];

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    const getDataSub = this.dataService.getItems().subscribe(items => {
      this.businessArray = items;
    });

    this.subscriptions.push(getDataSub);
  }

  onRowClicked(row: Business) {
    this.router.navigateByUrl(`/business/${row.id}`)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
