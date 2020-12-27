import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentShellComponent } from 'src/app/core/components/content/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ContentShellComponent,
    children: [
      { path: '', redirectTo: 'containers', pathMatch: 'full' },
      { path: 'containers', loadChildren: () => import('../features/containers/containers.module').then(m => m.ContainersModule) },
      { path: 'ships', loadChildren: () => import('../features/ships/ships.module').then(m => m.ShipsModule) },
      { path: 'shipyards', loadChildren: () => import('../features/shipyards/shipyards.module').then(m => m.ShipyardsModule) },
      { path: '**', redirectTo: 'containers' },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
