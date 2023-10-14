import Image from 'next/image'
import styles from './page.module.css'
import Services from '@/components/ui/Services'


export default function Home() {
  return (
    <main className={styles.main}>
      <Services></Services>



    </main>
  )
}
