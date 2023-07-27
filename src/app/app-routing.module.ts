import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'table',
    children: [
      {
        path: 'person',
        loadChildren: () => import('./views/table-person/table-person.module').then(m => m.TablePersonModule),
      },
      {
        path: 'firm',
        loadChildren: () => import('./views/table-firm/table-firm.module').then(m => m.TableFirmModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./views/table-product/table-product.module').then(m => m.TableProductModule),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
