"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Loading from './loading';
import { useGetServicesQuery } from '@/redux/api/servicesApi';
import { Col, Row } from 'antd';
import Services from '@/components/ui/Services';


export default function Home() {

  const { data, isLoading } = useGetServicesQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <Loading></Loading>
  }
  // const servicesData = data?.data;
  const servicesData = data;
  // console.log(servicesData);

  return (
    <main className={styles.main}>
      
      {
        servicesData && <Services services={servicesData}></Services>
      }

      








    </main>
  )
}
