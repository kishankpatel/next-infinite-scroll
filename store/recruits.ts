import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiEndpoint =
  "https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest";

const perPage = 9;

export const fetchRecruits = createAsyncThunk("recruits/fetchRecruits", async (pageNum: number) => {
  const response = await fetch(`${apiEndpoint}?page=${pageNum}`);
  const { data } = await response.json();
  return data.recruits;
});

const initialState = {
  recruits: [],
  stopFetching: false,
} as any;

const recruitsSlice = createSlice({
  name: "recruits",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecruits.fulfilled, (state, action) => {
      if (action.payload.length < perPage) {
        state.stopFetching = true;
      } 
      state.recruits.push(...action.payload);
    });
  }
})

export default recruitsSlice.reducer;