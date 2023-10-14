"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Loading from './loading';
import { useGetServicesQuery } from '@/redux/api/servicesApi';
import { Col, Row } from 'antd';
import Services from '@/components/ui/Services';
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {

  const { data, isLoading } = useGetServicesQuery(undefined);
  if (isLoading) {
    return <Loading></Loading>
  }
  const servicesData = data?.data;
  // console.log(servicesData);

  return (
    <main className={styles.main}>
      <Toaster />
      {
        servicesData && <Services services={servicesData}></Services>
      }

      








    </main>
  )
}
