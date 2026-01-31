import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/axios";

export const getAllPublicListing = createAsyncThunk(
  "listing/getAllPublicListing", async () => {
    try {
      const { data } = await api.get("api/listing/public");
      return data;

    } catch (error) {
      return [];
    }


  })

export const getAllUserListing =
  createAsyncThunk("listing/getAllUserListing", async ({ getToken }) => {
    try {
      const token = await getToken();
      const { data } = await api.get('api/listing/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  });

const listingSlice = createSlice({
  name: "listing",
  initialState: {
    listings: [],
    userListings: [],
    balance: {
      earnings: 0,
      withdrawn: 0,
      available: 0
    }
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPublicListing.fulfilled, (state, action) => {
        // Extract the array from the response
        state.listings = action.payload.listings || action.payload || [];
      })
      .addCase(getAllUserListing.fulfilled, (state, action) => {
        state.userListings = action.payload.listings;
        state.balance = action.payload.balance;
      });
  }
});


export const { setListings } = listingSlice.actions;

export default listingSlice.reducer;