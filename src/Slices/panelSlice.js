import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownMenu : false,
    searchResponsive : false,
    chooseOptionsImage : false
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
        },
        closeChooseOptionsImage : (state) => {
            state.chooseOptionsImage = false
        },
        toogleChooseOptionsImage : (state) => {
            state.chooseOptionsImage = !state.chooseOptionsImage;
        }
    }
})

export default panelSlice.reducer
export const { 
    toogleDropDownMenu, 
    toogleSearchResponsive,
    toogleChooseOptionsImage,
    closeDropDownMenu,
    closeSearchResponsive,
    closeChooseOptionsImage 
} = panelSlice.actions