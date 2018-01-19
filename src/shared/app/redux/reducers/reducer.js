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
    bodysecondTitle: null,
    bodythirdTitle: null,
    dataTreatmentOptions: null,
    dataTreatingHearingLoss: null,
    dataTypesOfTreatment: null,
    dataHearingAidVsImplantableSolutions: null,
    dataCostsAndAffordability: null,
    dataFindAClinic: null
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_NAME:
            return {...state, name: action.payload.name, email: action.payload.email}
        case Types.UPDATE_HEADER:
            return {...state, headerTitle: action.payload['title']}
        case Types.UPDATE_HEADER_COUNTRY:
            return {...state, headerCountry: action.payload.country}
        case Types.UPDATE_FOOTER_COUNTRY:
            return {...state, footerCountry: action.payload.country}
        case Types.UPDATE_FOOTER:
            return {...state, footerTitle: action.payload['title']}
        case Types.UPDATE_HOME:
            return {...state, bodyTitle: action.payload['title']}
        case Types.UPDATE_HOMESECOND:
            return {...state, bodysecondTitle: action.payload['title']}
        case Types.UPDATE_TREATMENTOPTIONS:
            return {...state, dataTreatmentOptions: action.payload}
        case Types.UPDATE_TREATINGHEARINGLOSS:
            return {...state, dataTreatingHearingLoss: action.payload}
        case Types.UPDATE_HEARINGAIDSVSIMPLANTABLESOLUTIONS:
            return {...state, dataHearingAidVsImplantableSolutions: action.payload}
        case Types.UPDATE_FINDACLINIC:
            return {...state, dataFindAClinic: action.payload}
        case Types.UPDATE_TYPESOFTREATMENT:
            return {...state, dataTypesOfTreatment: action.payload}
        case Types.UPDATE_COSTSANDAFFORDABILITY:
            return {...state, dataCostsAndAffordability: action.payload}
        case Types.UPDATE_HOMETHIRD:
            return {...state, bodythirdTitle: action.payload['title']}
        default:
            return state;
    }
}