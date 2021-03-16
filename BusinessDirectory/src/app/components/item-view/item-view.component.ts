import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  business!: Business;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getItems().subscribe(items => 
      this.business = items[0])
  }

  get imageSource() {
    return this.business.image;
  }
}
