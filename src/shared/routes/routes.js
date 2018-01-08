import Home from '../../containers/Home.jsx';
import Homesecond from '../../containers/Homesecond.jsx';
import User from '../app/user.jsx';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/:country/firstpage',
            component: Home,
            exact: true
        },
        {
            path: '/:country/secondpage',
            component: Homesecond,
            exact: true
        },
        {
            path: '/:country/thirdpage',
            component: Homesecond,
            exact: true
        }
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
} 