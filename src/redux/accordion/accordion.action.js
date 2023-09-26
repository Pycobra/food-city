import AccordionActionTypes from "./accordion.types"

export const accordionStart = (content) => ({
    type: AccordionActionTypes.ACCORDION_START,
    payload: content
})