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
    dataHome: null,
    dataTreatmentOptions: null,
    dataTreatingHearingLoss: null,
    dataHearingLoss: null,
    dataTypesOfTreatment: null,
    dataHearingAidVsImplantableSolutions: null,
    dataCostsAndAffordability: null,
    dataUntreatedHearingLossAdult: null,
    dataUntreatedHearingLossChildren: null,
    dataFindAClinic: null,
    dataImpactOfHearingLoss: null,
    dataSignsOfHearingLoss: null,
    dataCommonSignsAdults : null,
    dataCommonSignsChildren : null,
    dataProductsAndSolutions:null,
    dataNucleusProfileEarImplants:null,
    dataCarinaMiddleEarImplants:null,
    dataBahaBoneConductionSystem:null,
    dataSurgicalAndNonSurgicalProcedures:null,
    dataPreparingForAnImplant:null,
    dataStepsToGettingAnImplant: null,
    dataFundingYourHearingSolution:null,
    dataHealthInsurance: null,
    dataSearchResults: null,
    getCurrentPosition: null,
    getGlobalSearch:null,
    markers: [],
    lat: 0,
    lng: 0
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
            return {...state, dataHome: action.payload}
        case Types.UPDATE_HOMESECOND:
            return {...state, bodysecondTitle: action.payload['title']}
        case Types.UPDATE_TREATMENTOPTIONS:
            return {...state, dataTreatmentOptions: action.payload}
        case Types.UPDATE_TREATINGHEARINGLOSS:
            return {...state, dataTreatingHearingLoss: action.payload}
        case Types.UPDATE_HEARINGLOSS:
            return {...state, dataHearingLoss: action.payload}
        case Types.UPDATE_HEARINGAIDSVSIMPLANTABLESOLUTIONS:
            return {...state, dataHearingAidVsImplantableSolutions: action.payload}
        case Types.UPDATE_FINDACLINIC:
            return {...state, dataFindAClinic: action.payload}
        case Types.UPDATE_TYPESOFTREATMENT:
            return {...state, dataTypesOfTreatment: action.payload}
        case Types.UPDATE_COSTSANDAFFORDABILITY:
            return {...state, dataCostsAndAffordability: action.payload}
        case Types.UPDATE_IMPACTOFHEARINGLOSS:
            return {...state, dataImpactOfHearingLoss: action.payload}
        case Types.UPDATE_SIGNSOFHEARINGLOSS:
            return {...state, dataSignsOfHearingLoss: action.payload}
        case Types.UPDATE_UNTREATEDHEARINGLOSSADULT:
            return {...state, dataUntreatedHearingLossAdult: action.payload}
        case Types.UPDATE_UNTREATEDHEARINGLOSSCHILDREN:
            return {...state, dataUntreatedHearingLossChildren: action.payload}
        case Types.UPDATE_COMMONSIGNSADULTS:
            return {...state, dataCommonSignsAdults: action.payload}
        case Types.UPDATE_COMMONSIGNSCHILDREN:
            return {...state, dataCommonSignsChildren: action.payload}
        case Types.UPDATE_HEARINGAIDS:
            return {...state, dataHearingAids: action.payload}
        case Types.UPDATE_COCHLEARIMPLANTS:
            return {...state, dataCochlearImplants: action.payload}
        case Types.UPDATE_BONECONDUCTIONIMPLANTS:
            return {...state, dataBoneConductionImplants: action.payload}
        case Types.UPDATE_MIDDLEEARIMPLANTS:
            return {...state, dataMiddleEarImplants: action.payload}
        case Types.UPDATE_TALKINGFAMILYHEARINGLOSS:
            return {...state, dataTalkingFamilyHearingLoss: action.payload}
        case Types.UPDATE_HOMETHIRD:
            return {...state, bodythirdTitle: action.payload['title']}
        case Types.GET_CURRENT_POSITION:
            console.log(' action.payload.lat ',action.payload.lat);
            return {...state, lat: action.payload.lat, lng: action.payload.lng}
        case Types.UPDATE_MARKERS:
            console.log(' MARKERS - action.payload ',action.payload.markers);
            return {...state, markers: action.payload.markers}
        case Types.UPDATE_CITY:
        console.log(' CITY ---  ',action.payload);
            return {...state, city: action.payload}
        case Types.UPDATE_PRODUCTSANDSOLUTIONS:
            return {...state, dataProductsAndSolutions: action.payload}
        case Types.UPDATE_NUCLEUSPROFILEEARIMPLANTS:
            return {...state, dataNucleusProfileEarImplants: action.payload}
        case Types.UPDATE_CARINAMIDDLEEARIMPLANTS:
            return {...state, dataCarinaMiddleEarImplants: action.payload}
        case Types.UPDATE_BAHABONECONDUCTIONSYSTEM:
            return {...state, dataBahaBoneConductionSystem: action.payload}
        case Types.UPDATE_SURGICALANDNONSURGICALPROCEDURES:
            return {...state, dataSurgicalAndNonSurgicalProcedures: action.payload}
        case Types.UPDATE_PREPARINGFORANIMPLANT:
            return {...state, dataPreparingForAnImplant: action.payload}
        case Types.UPDATE_STEPSTOGETTINGANIMPLANT:
            return {...state, dataStepsToGettingAnImplant: action.payload}
        case Types.UPDATE_LIFESTYLEFACTORS:
            return {...state, dataLifestyleFactors: action.payload}
        case Types.UPDATE_WATERPROOFOPTIONS:
            return {...state, dataWaterproofOptions: action.payload}
        case Types.UPDATE_FORNOISYENVIRONMENTS:
            return {...state, dataForNoisyEnvironments: action.payload}
        case Types.UPDATE_FORACTIVELIFE:
            return {...state, dataForActiveLife: action.payload}
        case Types.UPDATE_FORSPEECHMUSIC:
            return {...state, dataForSpeechMusic: action.payload}  
        case Types.UPDATE_FUNDINGYOURHEARINGSOLUTION:
            return {...state, dataFundingYourHearingSolution: action.payload}
        case Types.UPDATE_HEALTHINSURANCE:
            return {...state, dataHealthInsurance: action.payload}
        case Types.UPDATE_SEARCHRESULTS:
            return {...state, dataSearchResults: action.payload}
        case Types.GET_GLOBALSEARCH:
            return {...state,getGlobalSearch: action.payload}
        default:
            return state;
    }
}
