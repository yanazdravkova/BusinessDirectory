import { Action } from "@ngrx/store";
import { Business } from "../models/business";

export enum ActionTypes {
  LoadDataBegin = "[Data] Load data begin",
  LoadDataSuccess = "[Data] Load data success",
  LoadDataFailure = "[Data] Load data failure"
}

export class LoadDataBegin implements Action {
  readonly type = ActionTypes.LoadDataBegin;
}

export class LoadDataSuccess implements Action {
  readonly type = ActionTypes.LoadDataSuccess;

  constructor(public payload: { data: Business[] }) {}
}

export class LoadDataFailure implements Action {
  readonly type = ActionTypes.LoadDataFailure;

  constructor(public payload: { error: any }) {}
}

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure;