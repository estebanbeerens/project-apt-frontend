import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreFacade } from 'src/app/core/state/facade';

@Component({
  selector: 'apt-header-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class HeaderShellComponent implements OnInit {

  sideNavToggled$: Observable<boolean>;

  constructor(
    private coreFacade: CoreFacade
  ) { }

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
  }

  toggle(): void {
    this.coreFacade.toggleSideNav();
  }

}
