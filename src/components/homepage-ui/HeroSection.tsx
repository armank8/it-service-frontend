import Image from 'next/image';
import styles from './HeroSection.module.scss';
import service1 from '../../assets/service1.jpg';
const HeroSection = () => {
    return (
        <section className='hero section_container'>
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>

                    <h3>We provide you the</h3>
                    <h1>Best IT Service in the town</h1>
                    <p className="lead_text">24x7  service</p>

                </div>
                <div className="hero_img">
                    <Image layout='responsive' src={service1} alt='service svg' width={500} height={500}></Image>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;