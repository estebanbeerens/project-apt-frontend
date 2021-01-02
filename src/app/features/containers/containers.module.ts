import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { OverviewGeneralPresenterComponent } from 'src/app/features/containers/components/overview/general-presenter/general-presenter.component';
import { OverviewShellComponent } from 'src/app/features/containers/components/overview/shell/shell.component';
import { InputGeneralPresenterComponent } from 'src/app/features/containers/components/input/general-presenter/general-presenter.component';
import { InputShellComponent } from 'src/app/features/containers/components/input/shell/shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainersService } from 'src/app/features/containers/services/containers.service';
import { ShipsService } from 'src/app/features/ships/services/ships.service';


@NgModule({
  declarations: [
    OverviewGeneralPresenterComponent, 
    OverviewShellComponent,
    InputGeneralPresenterComponent, 
    InputShellComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    SharedModule
  ],
  providers: [
    ContainersService,
    ShipsService
  ]
})
export class ContainersModule { }
