import { ICoreContentState, ICoreContentStateInitialValue } from 'src/app/core/interfaces/core-content.state';
import { ICoreSidenavState, ICoreSidenavStateInitialValue } from 'src/app/core/interfaces/core-sidenav.state';

export interface ICoreState {
    sidenav: ICoreSidenavState;
    content: ICoreContentState;
}

export const ICoreStateInitialValue: ICoreState = {
    sidenav: ICoreSidenavStateInitialValue,
    content: ICoreContentStateInitialValue
}
