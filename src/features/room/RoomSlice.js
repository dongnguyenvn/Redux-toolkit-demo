import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "../../service/roomService.js";

const initialState = [];


export const createRoom = createAsyncThunk(
  "rooms/create",
  async ({ roomName, status,description }) => {
    const res = await roomService.create({ roomName, status, description });
    return res.data;
  }
);

export const retrieveRooms = createAsyncThunk(
  "rooms/retrieve",
  async () => {
    const res = await roomService.getAll();
    return res.data;
  }
);

export const updateRoom = createAsyncThunk(
  "rooms/update",
  async ({ id, data }) => {
    const res = await roomService.update(id, data);
    return res.data;
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/delete",
  async ({ id }) => {
    await roomService.delete(id);
    return { id };
  }
);


// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

const roomSlice = createSlice({
  name: "room",
  initialState,
  extraReducers: {
    [createRoom.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveRooms.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateRoom.fulfilled]: (state, action) => {
      const index = state.findIndex(room => room.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteRoom.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    }
  },
});

const { reducer } = roomSlice;
export default reducer;