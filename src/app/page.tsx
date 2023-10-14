"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Loading from './loading';
import { useGetServicesQuery } from '@/redux/api/servicesApi';
import ServiceCard from '@/components/ui/ServiceCard';
import { Col, Row } from 'antd';
import Services from '@/components/ui/Services';



export default function Home() {

  const { data, isLoading } = useGetServicesQuery(undefined);
  // if (isLoading) {
  //   <Loading></Loading>
  // }
  const servicesData = data?.data;
  // console.log(servicesData);

  return (
    <main className={styles.main}>


      {/* {
             servicesData.map((service: any) => {
              <ServiceCard service={service} key={service._id}></ServiceCard>
            })
          } */}
      {
        servicesData && <Services services={servicesData}></Services>
      }








    </main>
  )
}
