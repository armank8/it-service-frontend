"use client";

import Loading from '@/app/loading';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromBooking } from '@/redux/slices/booking/bookingSlice';
import { removeFromCart } from '@/redux/slices/services/serviceSlice';
import { IBooking } from '@/types/globalTypes'
import { Button } from 'antd';
import React from 'react'

const BookingCard = ({ booking }: { booking: IBooking }) => {
    const dispatch = useAppDispatch();
    console.log(booking);
    if(!booking){
        return <Loading></Loading>
    }

    const handleRemoveFromBooking = (booking: IBooking) => {
        console.log(booking);
        dispatch(removeFromBooking(booking));
    }
    return (
        <div style={{ border: '1px solid black', padding: "5px", marginTop: '10px' }}>

            <div>
                <p>Service Name :  {booking.name} </p>
                <p>Service Price :  {booking.price} </p>
                <p>Service category :  {booking.category} </p>
            </div>

            <Button onClick={() => handleRemoveFromBooking(booking)} className="text-red-300 px-2" type='primary' danger>
                Remove From Booking
            </Button>

        </div>
    )
}

export default BookingCard;