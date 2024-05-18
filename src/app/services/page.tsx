"use client";

import { useGetServicesQuery } from "@/redux/api/servicesApi";
import Loading from "../loading";
import Services from "@/components/ui/Services";

const ServicesPage = () => {
    const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery(undefined);

    if (servicesLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Our Exclusive Services</h1>
            {
                servicesData && <Services services={servicesData} type={undefined}></Services>
            }
        </div>
    )
}

export default ServicesPage