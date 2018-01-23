import Home from '../../containers/Home/Home.jsx';
import Homesecond from '../../containers/Homesecond/Homesecond.jsx';
import Homethird from '../../containers/Homethird/Homethird.jsx';
import User from '../app/user.jsx';

import HomePage from "../../containers/HomePage/HomePage.jsx";
import HearingAidVsImplantableSolutions from "../../containers/HearingAidVsImplantableSolutions/HearingAidVsImplantableSolutions.jsx";
import FindAClinic from "../../containers/FindAClinic/FindAClinic.jsx";
import StatsAndProofs from "../../containers/StatsAndProofs/StatsAndProofs.jsx";
import TreatmentOptions from "../../containers/TreatmentOptions/TreatmentOptions.jsx";
import TypesOfTreatment from "../../containers/TypesOfTreatment/TypesOfTreatment.jsx";
import TreatingHearingLoss from "../../containers/TreatingHearingLoss/TreatingHearingLoss.jsx"
import HearingLoss from "../../containers/HearingLoss/HearingLoss.jsx"
import ImplantableSolutions from "../../containers/ImplantableSolutions/ImplantableSolutions.jsx";
import CostsAndAffordability from "../../containers/CostsAndAffordability/CostsAndAffordability.jsx"
import ImpactOfHearingLoss from "../../containers/ImpactOfHearingLoss/ImpactOfHearingLoss.jsx";
import UntreatedHearingLossAdult from "../../containers/UntreatedHearingLossAdult/UntreatedHearingLossAdult.jsx";
import UntreatedHearingLossChildren from "../../containers/UntreatedHearingLossChildren/UntreatedHearingLossChildren.jsx";


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
            path: '/:country/hearing-aids-vs-implantable-solutions',
            component: HearingAidVsImplantableSolutions,
            exact: true
        },
        {
            path: '/:country/costs-and-affordability',
            component: CostsAndAffordability,
            exact: true
        },
        {
            path: '/:country/treatment-options',
            component: TreatmentOptions,
            exact: true
        },
        {
            path: '/:country/types-of-treatment',
            component: TypesOfTreatment,
            exact: true
        },
        {
            path: '/:country/treating-hearing-loss',
            component: TreatingHearingLoss,
            exact: true
        },
        {
            path: '/:country/impact-of-hearing-loss',
            component: ImpactOfHearingLoss,
            exact: true
        },
        {
            path: '/:country/hearing-loss',
            component: HearingLoss,
            exact: true
        },
        {
            path: '/:country/implantable-solutions',
            component: ImplantableSolutions,
            exact: true
        },
        {
            path: '/:country/stats-and-proofs',
            component: StatsAndProofs,
            exact: true
        },
        {
            path: '/:country/untreated-hearing-loss-adult',
            component: UntreatedHearingLossAdult,
            exact: true
        },
        {
            path: '/:country/untreated-hearing-loss-children',
            component: UntreatedHearingLossChildren,
            exact: true
        },
        {
            path: '/:country/find-a-clinic',
            component: FindAClinic,
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