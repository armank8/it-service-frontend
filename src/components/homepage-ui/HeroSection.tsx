import Image from 'next/image';
import styles from './HeroSection.module.css';
import serviceSvg from '../../assets/service.svg';
const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.leftSide}>
                <h3>We provide you the</h3>
                <h1>Best IT Service in the town</h1>
                <p>24x7  service</p>
            </div>
            <div className={styles.rightSide}>
                <Image src={serviceSvg} alt='service svg' width={400} height={400}></Image>

            </div>
        </div>
    )
}

export default HeroSection;