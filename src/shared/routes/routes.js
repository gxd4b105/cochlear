import Home from '../../containers/Home/Home.jsx';
import Homesecond from '../../containers/Homesecond/Homesecond.jsx';
import Homethird from '../../containers/Homethird/Homethird.jsx';
import User from '../app/user.jsx';

import HomePage from "../../containers/HomePage/HomePage.jsx";
import HearingAidVsCochlearImplant from "../../containers/HearingAidVsCochlearImplant/HearingAidVsCochlearImplant.jsx";
import TreatingHearingLoss from "../../containers/TreatingHearingLoss/TreatingHearingLoss.jsx";
import ClinicFinder from "../../containers/ClinicFinder/ClinicFinder.jsx";
import StatsAndProofs from "../../containers/StatsAndProofs/StatsAndProofs.jsx";

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
            component: Homethird,
            exact: true
        },
        {
            path: '/:country/home',
            component: HomePage,
            exact: true
        },
        {
            path: '/:country/hearing-aid-vs-cochlear-implant',
            component: HearingAidVsCochlearImplant,
            exact: true
        },
        {
            path: '/:country/treating-hearing-loss',
            component: TreatingHearingLoss,
            exact: true
        },
        {
            path: '/:country/stats-and-proofs',
            component: StatsAndProofs,
            exact: true
        },
        {
            path: '/:country/clinic-finder',
            component: ClinicFinder,
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