import { Component, OnInit } from '@angular/core';
import { toggleSideNav } from 'src/app/core/state/actions';
import { CoreFacade } from 'src/app/core/state/facade';

@Component({
  selector: 'apt-content-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ContentShellComponent implements OnInit {

  constructor(
    private coreFacade: CoreFacade
  ) { }

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.coreFacade.toggleSideNav();
    }
  }

}
