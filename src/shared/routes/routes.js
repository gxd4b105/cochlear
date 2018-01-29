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
import PlanningYourTest from "../../containers/PlanningYourTest/PlanningYourTest.jsx";


import Main from "../../containers/_poc/Main.jsx";

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/:country/:lang/:component',
            component: Main,
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