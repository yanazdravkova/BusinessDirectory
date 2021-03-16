import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { DataService } from "../services/data.service";
import * as DataActions from "../actions/data.actions";

@Injectable()
export class DataEffects {
    constructor(private actions: Actions, private dataService: DataService) { }

    loadData = createEffect(() => this.actions.pipe(
        ofType(DataActions.ActionTypes.LoadDataBegin),
        switchMap(() => {
            return this.dataService.loadData().pipe(
                map(data => new DataActions.LoadDataSuccess({ data: data })),
                catchError(error =>
                    of(new DataActions.LoadDataFailure({ error: error }))
                )
            );
        })
    ))
}