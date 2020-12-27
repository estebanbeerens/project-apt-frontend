import { IRouteInfo } from 'src/app/core/routes/route-info';

export const routes: IRouteInfo[] = [
    {
        path: '/app/containers',
        title: 'Containers',
        icon: 'local_shipping',
        class: '',
        category: 'Navigatie'
    },
    {
        path: '/app/ships',
        title: 'Schepen',
        icon: 'directions_boat',
        class: '',
        category: ''
    },
    {
        path: '/app/shipyards',
        title: 'Rederijen',
        icon: 'anchor',
        class: '',
        category: ''
    }
]