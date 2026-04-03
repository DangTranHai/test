import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TiniState, TMovie, TResponse } from "../../../types";
import { AxiosError } from "axios";
import api from "../../../services/api";

const initialState: TiniState<TMovie> = {
  loading: false,
  data: null,
  error: null,
};

export const fetchListMovie = createAsyncThunk(
  "fetchListMovie",
  async (__, { rejectWithValue }) => {
    try {
      const result = await api.get<TResponse<TMovie[]>>(
        "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      );
      return result.data.content;
    } catch (error) {
      const err = error as AxiosError<{ content?: string }>;
      return rejectWithValue(err.response?.data?.content || err.message);
    }
  },
);

const homeSlide = createSlice({
  name: "homeSlide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListMovie.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload as AxiosError;
    });
  },
});

export default homeSlide.reducer;
