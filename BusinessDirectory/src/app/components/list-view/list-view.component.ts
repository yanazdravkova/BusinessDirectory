import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/models/business';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  public businessArray: Business[] = [];
  public columnsToDisplay = ['name', 'description'];
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    const getDataSub = this.dataService.getData().subscribe(data => {
      this.businessArray = data;
    });
  }

  onRowClicked() {
    console.log('clicked');
    this.router.navigateByUrl('/item-view')
  }

}
