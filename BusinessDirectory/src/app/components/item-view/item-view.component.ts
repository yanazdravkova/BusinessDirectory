import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  private businessId!: string;
  public business!: Business;
  public nearbyPlaces!: Business[];
  public columnsToDisplay = ['name', 'description'];
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.businessId = params['id'];

      this.dataService.getItems().subscribe(items => {
        this.business = items.find(b => b.id === this.businessId);
        this.nearbyPlaces = items.filter(b => b.address?.country === this.business.address?.country && b.id !== this.business.id).slice(0, 4);
      });
    });
  }

}
