import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipyardsRoutingModule } from './shipyards-routing.module';
import { InputGeneralPresenterComponent } from 'src/app/features/shipyards/components/input/general-presenter/general-presenter.component';
import { InputShellComponent } from 'src/app/features/shipyards/components/input/shell/shell.component';
import { OverviewGeneralPresenterComponent } from 'src/app/features/shipyards/components/overview/general-presenter/general-presenter.component';
import { OverviewShellComponent } from 'src/app/features/shipyards/components/overview/shell/shell.component';


@NgModule({
  declarations: [
    OverviewGeneralPresenterComponent, 
    OverviewShellComponent,
    InputGeneralPresenterComponent, 
    InputShellComponent
  ],
  imports: [
    CommonModule,
    ShipyardsRoutingModule
  ]
})
export class ShipyardsModule { }
