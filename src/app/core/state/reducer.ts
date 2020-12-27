import { createReducer, on } from '@ngrx/store';
import { ICoreState, ICoreStateInitialValue } from 'src/app/core/interfaces/core.state';

import * as actions from './actions';

export const coreReducer = createReducer<ICoreState>(
    ICoreStateInitialValue,

    on(actions.toggleLoadingResults, (state, action): ICoreState =>{
        return {
            ...state,
            content: {
                isLoadingResults: !state.content.isLoadingResults
            }
        }
    }),

    on(actions.toggleSideNav, (state, action): ICoreState =>{
        return {
            ...state,
            sidenav: {
                toggled: !state.sidenav.toggled
            }
        }
    }),
);