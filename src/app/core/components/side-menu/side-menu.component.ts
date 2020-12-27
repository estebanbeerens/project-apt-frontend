import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { CoreFacade } from 'src/app/core/state/facade';
import { IRouteInfo } from '../../routes/route-info';
import { routes } from 'src/app/core/routes/routes';

@Component({
  selector: 'apt-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  
  public menuItems: IRouteInfo[];
  
  constructor(
    private coreFacade: CoreFacade,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
    this.menuItems = routes.filter(menuItem => menuItem);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSideNav(): void {
    if (window.innerWidth <= 768) {
      this.coreFacade.toggleSideNav();
    }
  }

  onBackdropClick(): void {
    this.coreFacade.toggleSideNav();
  }

}
