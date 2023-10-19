"use client";

import dynamic from 'next/dynamic'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false });

import BookingCard from "@/components/ui/BookingCard";
import { useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import toast from "react-hot-toast"
import Loading from "../loading";
import { useCreateBookingMutation } from '@/redux/api/bookingApi';
import { Response } from '@/types/globalTypes';

const BookingPage = () => {
    const [createBooking] = useCreateBookingMutation();
    const { bookings, total } = useAppSelector((state) => state.booking);
    console.log(bookings);
    if (!bookings) {
        return <Loading></Loading>
    }
    const { role, id: userId } = getUserInfo() as any;

    const handlePayment = () => {
        toast.success("Payment done");
    }

    const handleBooking = async () => {
        // bookings["userId"]=userId;

        console.log(bookings);
        const res:Response = await createBooking(bookings);

        // toast("Booking Created successfully");

        if (res.data) {
            console.log(res);
            toast("Booking Created successfully");

        } else if (res.error) {
            console.log(res);
            toast.error("Booking not Created");
        }
    }
    return (
        <div style={{ width: "70vw", margin: '20px auto' }}>

            <h1>Booking Page</h1>
            <Button onClick={() => handlePayment()} type="primary" style={{ margin: '0 10px 0 0' }}>Make Payment</Button>

            <Button onClick={() => handleBooking()} type="primary">Complete Order</Button>


            {
                bookings && bookings.map((booking) =>
                    <BookingCard key={booking.serviceId} booking={booking} ></BookingCard>
                )

            }


        </div>
    )
}

export default BookingPage