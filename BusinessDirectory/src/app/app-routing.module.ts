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
        redirectTo: '/business-directory',
        pathMatch: 'full'
      },
      {
        path: 'business-directory',
        component: ListViewComponent
      },
      {
        path: 'business/:id',
        component: ItemViewComponent
      }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
