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
        let {data} = await Request.get(`https://api.myjson.com/bins/8rflz`);
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
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/treatment-options`);
        dispatch({ type: Types.UPDATE_TREATMENTOPTIONS, payload: data });
    }
}

export function getTreatingHearingLoss() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/treating-hearing-loss`);
        dispatch({ type: Types.UPDATE_TREATINGHEARINGLOSS, payload: data });
    }
}

export function getTypesOfTreatment() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/types-of-treatment`);
        dispatch({ type: Types.UPDATE_TYPESOFTREATMENT, payload: data });
    }
}

export function getHearingAidVsImplantableSolutions() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/hearing-aids-vs-implantable-solutions`);
        dispatch({ type: Types.UPDATE_HEARINGAIDSVSIMPLANTABLESOLUTIONS, payload: data });
    }
}

export function getFindAClinic() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/find-a-clinic`);
        dispatch({ type: Types.UPDATE_FINDACLINIC, payload: data });
    }
}

export function getCostsAndAffordability() {
    return async function (dispatch, getState) {
        // let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/treatment-options`);
        let {data} = await Request.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/costs-and-affordability`);
        dispatch({ type: Types.UPDATE_COSTSANDAFFORDABILITY, payload: data });
    }
}

export function getFooter() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://api.myjson.com/bins/xrn0n`);
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
        console.log('YYYYYYYYYYYYYYYYY ', data);
        dispatch({ type: Types.UPDATE_CITY, payload: data.city });
    }
}