import AccordionActionTypes from "./accordion.types"

const INITIAL_STATE = {
    accordion_list: [],
}

const accordionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AccordionActionTypes.ACCORDION_START:
            return{
                ...state,
                accordion_list: action.payload,
            }  
        default:
            return state
    }
}
 
export default accordionReducer;