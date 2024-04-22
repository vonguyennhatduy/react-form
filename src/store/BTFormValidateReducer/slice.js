import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listSV: [],
    listSV2: [],
    searchArray: [],
    editSV: null,
}


export const {reducer: btFormValidate, actions: btFormValidateActions} = createSlice({
    name: 'btFormValidate',

    initialState,

    reducers: {
        themSinhVien: (state, {payload}) => {
            state.listSV.push(payload);
            state.listSV2.push(payload);
        },

        xoaSinhVien: (state, {payload}) => {
            const index = state.listSV.findIndex((val) => val.id === payload.id);

            state.listSV.splice(index,1);

            const index2 = state.listSV2.findIndex((val) => val.id === payload.id);

            state.listSV2.splice(index2,1);
        },

        editSinhVien: (state, {payload}) => {
            state.editSV = payload;
        },

        updateSV: (state, {payload}) => {
            state.listSV = state.listSV.map((item) => 
                item?.id !== payload.id ? item : payload
            )
            state.listSV2 = state.listSV2.map((item) => 
                item?.id !== payload.id ? item : payload
            )

            state.editSV = null;
        },

        searchSinhVien: (state, {payload}) => {
            state.listSV = state.listSV.filter((val) => val.id === payload.id);
            state.searchArray = state.listSV;
        },

        Clear: (state) => {
            state.searchArray = '';
        },

        Return: (state) => {
            state.listSV = state.listSV2;
        }

    },

    extraReducers: (builder) => {},
})