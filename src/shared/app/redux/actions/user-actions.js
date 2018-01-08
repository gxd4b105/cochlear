import { Types } from '../constants/user-types';
import Request from 'axios';

export function getName(id) {
    console.log('get name ..', id);
    return async function (dispatch, getState) {
        let {data} = await getUserFromAPI(id);
        dispatch({ type: Types.UPDATE_NAME, payload: data });
    }
}

export function getHeader() {
    return async function (dispatch, getState) {
        let {data} = await getHeaderFromAPI();
        dispatch({ type: Types.UPDATE_HEADER, payload: data });
    }
}

export function setHeaderCountry(data) {
    console.log('here we go ', data);
    return function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_HEADER_COUNTRY, payload: data });
    }
}

export function getFooterCountry(data) {
    return function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_FOOTER_COUNTRY, payload: data });
    }
}

export function getBody() {
    return async function (dispatch, getState) {
        let {data} = await getBodyFromAPI();
        dispatch({ type: Types.UPDATE_BODY, payload: data });
    }
}

export function getHome() {
    return async function (dispatch, getState) {
        let {data} = await getHomeFromAPI();
        dispatch({ type: Types.UPDATE_HOME, payload: data });
    }
}

export function getHomesecond() {
    return async function (dispatch, getState) {
        let {data} = await getHomesecondFromAPI();
        dispatch({ type: Types.UPDATE_HOMESECOND, payload: data });
    }
}

export function getFooter() {
    return async function (dispatch, getState) {
        let {data} = await getFooterFromAPI();
        dispatch({ type: Types.UPDATE_FOOTER, payload: data });
    }
}

function getUserFromAPI(id) {
    return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

function getHeaderFromAPI() {
    return Request.get(`https://api.myjson.com/bins/192vif`);
}

function getBodyFromAPI() {
    return Request.get(`https://api.myjson.com/bins/8rflz`);
}

function getHomeFromAPI() {
    return Request.get(`https://api.myjson.com/bins/8rflz`);
}

function getHomesecondFromAPI() {
    return Request.get(`https://api.myjson.com/bins/17qxib`);
}

function getFooterFromAPI() {
    return Request.get(`https://api.myjson.com/bins/xrn0n`);
}
