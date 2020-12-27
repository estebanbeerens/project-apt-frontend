import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { OverviewGeneralPresenterComponent } from 'src/app/features/ships/components/overview/general-presenter/general-presenter.component';
import { InputGeneralPresenterComponent } from 'src/app/features/ships/components/input/general-presenter/general-presenter.component';
import { InputShellComponent } from 'src/app/features/ships/components/input/shell/shell.component';
import { OverviewShellComponent } from 'src/app/features/ships/components/overview/shell/shell.component';


@NgModule({
  declarations: [
    OverviewGeneralPresenterComponent, 
    OverviewShellComponent,
    InputGeneralPresenterComponent, 
    InputShellComponent
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }
