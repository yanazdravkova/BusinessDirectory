import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  private businessId!: string;
  public business!: Business;
  public nearbyPlacesToDisplay: Business[] = [];
  readonly NEARBY_PLACES_COUNT = 4;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    combineLatest([this.route.params, this.dataService.getItems()]).subscribe(
      ([routerParams, businessList]) => {
        this.businessId = routerParams['id'];
        this.business = businessList.find(b => b.id === this.businessId);
        const allNearbyPlaces = businessList.filter(place => this.isNearbyPlaceTo(place, this.business));
        this.nearbyPlacesToDisplay = allNearbyPlaces.slice(0, this.NEARBY_PLACES_COUNT);
      });
  }

  private isNearbyPlaceTo(placeToCheck: Business, business: Business): boolean {
    return placeToCheck.address?.country === business.address?.country &&
           placeToCheck.id !== business.id;
  }

  get formattedBusinessAddress(): string {
    return this.business?.address?.number + ' ' + this.business?.address?.street + ', ' + this.business?.address?.zip;
  }

  public formatNearbyPlaceDescription(place: Business): string {
    return place.address?.street + ', ' + place.address?.city + ' ' + place.address?.zip;
  }
}
