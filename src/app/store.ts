import { ADD_NEW_FILTER, REMOVE_FILTER } from "./actions";
import {tassign} from 'tassign';

export interface IAppState{
    filters: any[];
}

export const INITIAL_STATE: IAppState = {
    filters: []
} 

export function rootReducer(state, action) {
    switch(action.type){
        case ADD_NEW_FILTER: {
            let arr = state.filters;
            arr.push(action.data);
            return tassign(state, {filters: arr});
        }
        case REMOVE_FILTER: {
            let arr = state.filters;
            if(arr.indexOf(action.data) !== -1){
                arr.splice(arr.indexOf(action.data), 1)
                console.log(arr)
            }
            return tassign(state, {filters: arr});
        }
    }
    return state
}