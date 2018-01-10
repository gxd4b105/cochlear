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
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/dig-content-header`);
        dispatch({ type: Types.UPDATE_HEADER, payload: data });
    }
}

export function getHeaderUS() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/us/dig/us-content-header`);
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
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/dig-content-1`);
        dispatch({ type: Types.UPDATE_HOME, payload: data });
    }
}

export function getHomesecond() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/dig-content-2`);
        dispatch({ type: Types.UPDATE_HOMESECOND, payload: data });
    }
}

export function getHomethird() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/us/dig/us-content1`);
        dispatch({ type: Types.UPDATE_HOMETHIRD, payload: data });
    }
}

export function getFooter() {
    return async function (dispatch, getState) {
        let {data} = await Request.get(`https://dev.cochlear.com/contentservice/api/content/intl/dig/dig-content-footer`);
        dispatch({ type: Types.UPDATE_FOOTER, payload: data });
    }
}

export function getFooterUS() {
    return async function (dispatch, getState) {
        let {data} = await  Request.get(`https://dev.cochlear.com/contentservice/api/content/us/dig/us-content-footer`);
        dispatch({ type: Types.UPDATE_FOOTER, payload: data });
    }
}