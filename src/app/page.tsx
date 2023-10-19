"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Loading from './loading';
import { useGetServicesQuery } from '@/redux/api/servicesApi';
import { Col, Row } from 'antd';
import Services from '@/components/ui/Services';
import { useGetBlogsQuery } from '@/redux/api/blogApi';
import Blogs from '@/components/ui/Blogs';
import Faq from '@/components/ui/Faq';
import ClientReview from '@/components/ui/ClientReview';
import UpcomingServices from '@/components/ui/Upcoming Services';
import ServiceOverview from '@/components/ui/Overview';


export default function Home() {

  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery(undefined);
  const { data: blogsData, isLoading: blogsLoading } = useGetBlogsQuery(undefined);
  // console.log(servicesData);
  // console.log(blogsData);

  if (servicesLoading || blogsLoading) {
    return <Loading></Loading>
  }
  // const servicesData = data?.data;
  // const servicesData = data;
  // console.log(servicesData);

  return (
    <main className={styles.main}>
      <h1>Our Exclusive Services</h1>
      {
        servicesData && <Services services={servicesData}></Services>
      }

      <h1 style={{ margin: '30px auto' }}>Our Tech Blogs</h1>
      {
        blogsData && <Blogs blogs={blogsData}></Blogs>
      }

      <h1 style={{ margin: '40px auto 20px auto' }}>Frequently Asked Questions</h1>
      <Faq ></Faq>

      <h1 style={{ margin: '40px auto 20px auto' }}>What our customers say about us</h1>
      <ClientReview></ClientReview>

      <h1 style={{ margin: '40px auto 20px auto' }}>Our Upcoming Services</h1>
      <UpcomingServices></UpcomingServices>

      <h1 style={{ margin: '40px auto 20px auto' }}>Our  Service Overview</h1>
      <ServiceOverview></ServiceOverview>

    </main>
  )
}
