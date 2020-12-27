import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';
import { coreReducer } from 'src/app/core/state/reducer';
import { StoreModule } from '@ngrx/store';
import { ContentGeneralPresenterComponent } from 'src/app/core/components/content/general-presenter/general-presenter.component';
import { ContentShellComponent } from 'src/app/core/components/content/shell/shell.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderGeneralPresenterComponent } from 'src/app/core/components/header/general-presenter/general-presenter.component';
import { HeaderShellComponent } from 'src/app/core/components/header/shell/shell.component';
import { SideMenuComponent } from 'src/app/core/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    ContentGeneralPresenterComponent, 
    ContentShellComponent,
    HeaderShellComponent, 
    HeaderGeneralPresenterComponent,
    SideMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatSidenavModule,
    StoreModule.forFeature('core', coreReducer)
  ]
})
export class CoreModule { }
