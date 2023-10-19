"use client";

import dynamic from 'next/dynamic'
 
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false });

import BookingCard from "@/components/ui/BookingCard";
import { useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import toast from "react-hot-toast"
import Loading from "../loading";

const BookingPage = () => {

    const { bookings, total } = useAppSelector((state) => state.booking);
    console.log(bookings);

    if (!bookings) {
        return <Loading></Loading>
    }

    const { role, id: userId } = getUserInfo() as any;


    const handlePayment = () => {
        toast.success("Payment done");
    }
    return (
        <div style={{ width: "70vw", margin: '20px auto' }}>
            
            <h1>Booking Page</h1>
            <Button onClick={() => handlePayment()} type="primary">Make Payment</Button>
            {/* <time datetime="2016-10-25" suppressHydrationWarning /> */}
            {
                bookings && bookings.map((booking) => 
                    <BookingCard key={booking.serviceId} booking={booking} ></BookingCard>
                )
              
            }


        </div>
    )
}

export default BookingPage