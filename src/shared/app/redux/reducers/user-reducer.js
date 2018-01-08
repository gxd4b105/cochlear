import { Types } from '../constants/user-types';

const initialState = {
    name: null,
    email: null,
    title: null,
    headerTitle: null,
    headerCountry: null,
    footerCountry: null,
    footerTitle: null,
    bodyTitle: null,
    bodysecondTitle: null
};
export default function userReducer(state = initialState, action) {
    console.log('here we go222 ', action);
    switch (action.type) {
        case Types.UPDATE_NAME:
            return {...state, name: action.payload.name, email: action.payload.email}
        case Types.UPDATE_HEADER:
            return {...state, headerTitle: action.payload.title}
        case Types.UPDATE_HEADER_COUNTRY:
            console.log('YE UES ', state, action.payload.country);
            return {...state, headerCountry: action.payload.country}
        case Types.UPDATE_FOOTER_COUNTRY:
            return {...state, footerCountry: action.payload.country}
        case Types.UPDATE_FOOTER:
            return {...state, footerTitle: action.payload.title}
        case Types.UPDATE_HOME:
            return {...state, bodyTitle: action.payload.title}
        case Types.UPDATE_HOMESECOND:
            return {...state, bodysecondTitle: action.payload.title}
        default:
            return state;
    }
}