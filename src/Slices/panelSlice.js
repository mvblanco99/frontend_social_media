import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownMenu : false,
    searchResponsive : false
}

const panelSlice = createSlice({
    name : 'panel',
    initialState,
    reducers : {
        closeDropDownMenu : (state) => {
            state.dropdownMenu = false
        }, 
        toogleDropDownMenu : (state) => {
            state.dropdownMenu = !state.dropdownMenu;
        },
        closeSearchResponsive : (state) => {
            state.searchResponsive = false
        },
        toogleSearchResponsive : (state) => {
            state.searchResponsive = !state.searchResponsive;
        }
    }
})

export default panelSlice.reducer
export const { 
    toogleDropDownMenu, 
    toogleSearchResponsive,
    closeDropDownMenu,
    closeSearchResponsive 
} = panelSlice.actions