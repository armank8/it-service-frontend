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
import ClientReview from '@/components/homepage-ui/ClientReview';
import UpcomingServices from '@/components/ui/Upcoming Services';
import ServiceOverview from '@/components/ui/Overview';
import HeroSection from '@/components/homepage-ui/HeroSection';


export default function Home() {

  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery(undefined);
  const { data: blogsData, isLoading: blogsLoading } = useGetBlogsQuery(undefined);
  // console.log(servicesData);
  // console.log(blogsData);

  // if (servicesLoading || blogsLoading) {
  //   return <Loading></Loading>
  // }
  // const servicesData = data?.data;
  // const servicesData = data;
  // console.log(servicesData);

  return (
    <main className={styles.main}>
      <HeroSection></HeroSection>

      {
        servicesData && <Services services={servicesData} type={false}></Services>
      }

      
      {
        blogsData && <Blogs blogs={blogsData}></Blogs>
      }


      <Faq ></Faq>

      <ClientReview></ClientReview>

     
      <UpcomingServices></UpcomingServices>

      
      <ServiceOverview></ServiceOverview>

    </main>
  )
}
