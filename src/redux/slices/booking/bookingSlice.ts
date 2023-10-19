import { IBooking, IService } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export interface listState {
    bookings: IBooking[],
    total: number
}

const initialState: listState = {
    bookings: [],
    total: 0
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {

        addToBooking: (state, action: PayloadAction<IBooking>) => {
            const existing = state.bookings.find((booking) => booking._id === action.payload._id)
            // console.log(existing);
            if (existing) {
                toast("already added");
                // console.log("already added");
                // toast({ title: "already added" })
            } else {
                state.bookings.push({ ...action.payload });
                state.total += 1;
                toast("added to cart");

            }
        },
        removeFromBooking: (state, action: PayloadAction<IService>) => {
            state.bookings = state.bookings.filter((booking) => booking._id !== action.payload._id);
            state.total -= 1;
            toast("removed from cart");
            // existing.finished = true;
        }
    },
});

export const { addToBooking, removeFromBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
