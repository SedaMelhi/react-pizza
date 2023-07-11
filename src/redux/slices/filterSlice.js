import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    sort: {
      name: 'популярности',
      sortProperty: 'rating',
    },
  },
  reducers: {
    setCategoryId(state, { payload }) {
      state.categoryId = payload;
    },
    setSort(state, ss) {
      state.sort.name = ss.payload.name;
      state.sort.sortProperty = ss.payload.sortProperty;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
