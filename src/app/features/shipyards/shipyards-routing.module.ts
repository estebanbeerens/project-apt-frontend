import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewShellComponent } from 'src/app/features/shipyards/components/overview/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipyardsRoutingModule { }
