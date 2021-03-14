import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/list-view',
        pathMatch: 'full'
      },
      {
        path: 'list-view',
        component: ListViewComponent
      },
      {
        path: 'item-view',
        component: ItemViewComponent
      }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
