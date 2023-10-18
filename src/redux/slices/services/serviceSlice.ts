import { IService } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export interface listState {
    services: IService[],
    total: number
}

const initialState: listState = {
    services: [],
    total: 0
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<IService>) => {
            const existing = state.services.find((service) => service._id === action.payload._id)
            // console.log(existing);
            if (existing) {
                toast("already added");
                // console.log("already added");
                // toast({ title: "already added" })
            } else {
                state.services.push({ ...action.payload });
                state.total += 1;
                toast("added to cart");

            }
        },
        removeFromCart: (state, action: PayloadAction<IService>) => {
            state.services = state.services.filter((service) => service._id !== action.payload._id);
            state.total -=1;
            toast("removed from cart");
            // existing.finished = true;
        }
    },
});

export const { addToCart, removeFromCart } = serviceSlice.actions;

export default serviceSlice.reducer;
