import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';

export const initialState = {
  popups: [],
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action) {
      const { key } = action.payload;
      if (state.popups.find(popup => popup.key === key)) return state;
      const list = [...state.popups, { ...action.payload }];
      return set('popups', list)(state);
    },

    closePopup(state, action) {
      const { key } = action.payload;
      const list = state.popups.filter(item => item.key !== key);
      return set('popups', list)(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = popupSlice;
