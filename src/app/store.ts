import { SUCCESS_USER, ADD_NEW_FOODTYPE, REMOVE_FOODTYPE, ADD_NEW_AREA, REMOVE_AREA, LOGOUT_USER } from "./actions";
import {tassign} from 'tassign';

export interface IAppState{
    foodTypes: any[];
    areas: any[]
    usuario: null;
}

export const INITIAL_STATE: IAppState = {
    foodTypes: [],
    areas: [],
    usuario: null
} 

export function rootReducer(state, action) {
    switch(action.type){
        case ADD_NEW_FOODTYPE: { 
            let arr = state.foodTypes;
            arr.push(action.data);
            return tassign(state, {foodTypes: arr});
        }
        case REMOVE_FOODTYPE: {
            let arr = state.foodTypes;
            if(arr.indexOf(action.data) !== -1){
                arr.splice(arr.indexOf(action.data), 1)
            }
            return tassign(state, {foodTypes: arr});
        }
        case ADD_NEW_AREA: {
            let arr = state.areas;
            arr.push(action.data);
            return tassign(state, {areas: arr});
        }
        case REMOVE_AREA: {
            let arr = state.areas;
            if(arr.indexOf(action.data) !== -1){
                arr.splice(arr.indexOf(action.data), 1)
            }
            return tassign(state, {areas: arr});
        }
        case SUCCESS_USER: {
            return tassign(state, {usuario: action.data});            
        }
        case LOGOUT_USER: {
            return tassign(state, {usuario: action.data});
        }
    }
    return state
}