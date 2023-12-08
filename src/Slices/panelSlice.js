import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownMenu : false,
    searchResponsive : false,
    chooseOptionsImage : false,
    postPreview : false
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
        },
        closePostPreview : (state) => {
            state.postPreview = false
        },
        tooglePostPreview : (state) => {
            state.postPreview = !state.postPreview;
        }
    }
})

export default panelSlice.reducer
export const { 
    toogleDropDownMenu, 
    toogleSearchResponsive,
    toogleChooseOptionsImage,
    tooglePostPreview,
    closeDropDownMenu,
    closeSearchResponsive,
    closeChooseOptionsImage,
    closePostPreview 
} = panelSlice.actions