import { Types } from '../constants/user-types';
import Request from 'axios';

export function getName(id) {
    return async function (dispatch, getState) {
        let {data} = await getUserFromAPI(id);
        dispatch({ type: Types.UPDATE_NAME, payload: data });
    }
}

export function getHeader() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://api.myjson.com/bins/192vif`);
        dispatch({ type: Types.UPDATE_HEADER, payload: data });
    }
}

export function getHeaderUS() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://api.myjson.com/bins/g6ndd`);
        dispatch({ type: Types.UPDATE_HEADER, payload: data });
    }
}

export function setHeaderCountry(data) {
    return function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_HEADER_COUNTRY, payload: data });
    }
}


export function getHome() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/home-page`);
        dispatch({ type: Types.UPDATE_HOME, payload: data });
    }
}

export function getHomesecond() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://api.myjson.com/bins/17qxib`);
        dispatch({ type: Types.UPDATE_HOMESECOND, payload: data });
    }
}

export function getHomethird() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://api.myjson.com/bins/nv52p`);
        dispatch({ type: Types.UPDATE_HOMETHIRD, payload: data });
    }
}

export function getTreatmentOptions() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/treatment-options`);
        dispatch({ type: Types.UPDATE_TREATMENTOPTIONS, payload: data });
    }
}

export function getTreatingHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/treating-hearing-loss`);
        dispatch({ type: Types.UPDATE_TREATINGHEARINGLOSS, payload: data });
    }
}

export function getHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/hearing-loss`);
        dispatch({ type: Types.UPDATE_HEARINGLOSS, payload: data });
    }
}

export function getImpactOfHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/impact-of-hearing-loss`);
        dispatch({ type: Types.UPDATE_IMPACTOFHEARINGLOSS, payload: data });
    }
}

export function getSignsOfHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/signs-of-hearing-loss`);
        dispatch({ type: Types.UPDATE_SIGNSOFHEARINGLOSS, payload: data });
    }
}

export function getTypesOfTreatment() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/types-of-treatment`);
        dispatch({ type: Types.UPDATE_TYPESOFTREATMENT, payload: data });
    }
}

export function getHearingAidVsImplantableSolutions() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/hearing-aids-vs-implantable-solutions`);
        dispatch({ type: Types.UPDATE_HEARINGAIDSVSIMPLANTABLESOLUTIONS, payload: data });
    }
}

export function getUntreatedHearingLossChildren() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/untreated-hearing-loss-children`);
        dispatch({ type: Types.UPDATE_UNTREATEDHEARINGLOSSCHILDREN, payload: data });
    }
}

export function getUntreatedHearingLossAdult() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/untreated-hearing-loss-adult`);
        dispatch({ type: Types.UPDATE_UNTREATEDHEARINGLOSSADULT, payload: data });
    }
}

export function getCommonSignsAdult() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/common-signs-in-adults`);
        dispatch({ type: Types.UPDATE_COMMONSIGNSADULTS, payload: data });
    }
}

export function getCommonSignsChildren() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/common-signs-in-children`);
        dispatch({ type: Types.UPDATE_COMMONSIGNSCHILDREN, payload: data });
    }
}

export function getFindAClinic() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/find-a-clinic`);
        dispatch({ type: Types.UPDATE_FINDACLINIC, payload: data });
    }
}

export function getTalkingFamilyHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/talking-family-hearing-loss`);
        dispatch({ type: Types.UPDATE_TALKINGFAMILYHEARINGLOSS, payload: data });
    }
}

export function getHearingAids() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/hearing-aids`);
        dispatch({ type: Types.UPDATE_HEARINGAIDS, payload: data });
    }
}

export function getCochlearImplants() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/cochlear-implants`);
        dispatch({ type: Types.UPDATE_COCHLEARIMPLANTS, payload: data });
    }
}

export function getBoneConductionImplants() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/bone-conduction-implants`);
        dispatch({ type: Types.UPDATE_BONECONDUCTIONIMPLANTS, payload: data });
    }
}

export function getLifestyleFactors() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/lifestyle-factors`);
        dispatch({ type: Types.UPDATE_LIFESTYLEFACTORS, payload: data });
    }
}

export function getWaterproofOptions() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/waterproof-options`);
        dispatch({ type: Types.UPDATE_WATERPROOFOPTIONS, payload: data });
    }
}

export function getForNoisyEnvironments() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/for-noisy-environments`);
        dispatch({ type: Types.UPDATE_FORNOISYENVIRONMENTS, payload: data });
    }
}

export function getForActiveLife() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/for-an-active-life`);
        dispatch({ type: Types.UPDATE_FORACTIVELIFE, payload: data });
    }
}

export function getForSpeechMusic() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/for-speech-and-music`);
        dispatch({ type: Types.UPDATE_FORSPEECHMUSIC, payload: data });
    }
}

export function getMiddleEarImplants() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/middle-ear-implants`);
        dispatch({ type: Types.UPDATE_MIDDLEEARIMPLANTS, payload: data });
    }
}

export function getCostsAndAffordability() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/api/content/v1/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/costs-and-affordability`);
        dispatch({ type: Types.UPDATE_COSTSANDAFFORDABILITY, payload: data });
    }
}

export function getFooter() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https:/api.myjson.com/bins/xrn0n`);
        dispatch({ type: Types.UPDATE_FOOTER, payload: data });
    }
}

export function getFooterUS() {
    return async function (dispatch, getState) {
        let {data} = await  Request.get(`https://api.myjson.com/bins/jr901`);
        dispatch({ type: Types.UPDATE_FOOTER, payload: data });
    }
}

export function getCurrentPosition(data) {
    return function (dispatch, getState) {
        dispatch({ type: Types.GET_CURRENT_POSITION, payload: data });
    }
}

export function updateMarkers(data) {
    return function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_MARKERS, payload: data });
    }
}

export function updateCity(data) {
    return function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_CITY, payload: data.city });
    }
}

export function getProductsAndSolutions() {
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/products-and-solutions`);
        dispatch({ type: Types.UPDATE_PRODUCTSANDSOLUTIONS, payload: data})
    }
}

export function getNucleusProfileEarImplants(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/nucleus-profile-ear-implants`);
        dispatch({ type: Types.UPDATE_NUCLEUSPROFILEEARIMPLANTS, payload: data})
    }
}

export function getCarinaMiddleEarImplants(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/carina-middle-ear-implants`);
        dispatch({ type: Types.UPDATE_CARINAMIDDLEEARIMPLANTS, payload: data})
    }
}

export function getBahaBoneConductionSystem(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/baha-bone-conduction-system`);
        dispatch({ type: Types.UPDATE_BAHABONECONDUCTIONSYSTEM, payload: data})
    }
}

export function getSurgicalAndNonSurgicalProcedures(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/untreated-hearing-loss-adult`);
        dispatch({ type: Types.UPDATE_SURGICALANDNONSURGICALPROCEDURES, payload: data})
    }
}

export function getPreparingForAnImplant(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/preparing-for-an-implant`);
        dispatch({ type: Types.UPDATE_PREPARINGFORANIMPLANT, payload: data})
    }
}

export function getStepsToGettingAnImplant(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/steps-to-getting-an-implant`);
        dispatch({ type: Types.UPDATE_STEPSTOGETTINGANIMPLANT, payload: data})
    }
}

export function getFundingYourHearingSolution(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/funding-your-hearing-solution`);
        dispatch({ type: Types.UPDATE_FUNDINGYOURHEARINGSOLUTION, payload: data})
    }
}


export function getHealthInsurance(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/health-insurance`);
        dispatch({ type: Types.UPDATE_HEALTHINSURANCE, payload: data})
    }
}

export function getSearchResults(){
    return async function (dispatch, getState) {
        //To be changed
        let {data} = await Request.get(`https://auth.cochlear.com/api/content/v1/deloitte/home/search`);
        dispatch({ type: Types.UPDATE_SEARCHRESULTS, payload: data})
    }
}

export function getGlobalSearch(){
    return function (dispatch, getState){
        dispatch({ type: Types.GET_GLOBALSEARCH, payload: data});
    }
}