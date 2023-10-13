import React from 'react'
import styles from '../styles/Footer.module.css'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const Footer = () => {
  return (
    <section className={styles.footer}>
      <h2 className={styles.title}>John Nash - "Mis Probabilidades de éxito aumentan con cada nuevo intento"</h2>
      <div className={styles.iconsContainer}>
        <Link href="https://github.com/GusLDev" target='blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link>
        <Link href='https://www.linkedin.com/in/gustavo-marin-lemus-637b38258/' target='blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>
        <Link href="https://www.facebook.com/gustavo.lemus.5492216" target='blank'><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></Link>
      </div>
    </section>
  )
}

export default Footer