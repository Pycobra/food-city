import { createSelector } from "reselect";

const selectAccord = state => state.accordion

export const selectAccordionList = createSelector(
    [selectAccord],
    (accordion) => accordion.accordion_list
)