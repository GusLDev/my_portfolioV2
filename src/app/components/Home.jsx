import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Home = () => {
    return (
        <div id='home'>
            <section className={styles.banner} >
                <Image className={styles.background}
                    src="/assets/Programacion.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                />
                <span className={styles.imgShadow}></span>
                <div className={styles.info}>
                    <p className={styles.hello}>Hola,</p>
                    <p className={styles.presentation}>Soy <span className={styles.nameSyle}>Gustavo</span> <br /> Desarrollador Web.</p>
                    <p className={styles.spech}>Soy un apasionado y competente desarrollador web, mi búsqueda
                        incesante de desafíos y oportunidades es la piedra angular de mi enfoque profesional.</p>
                    <a href="/assets/CV_GustavoMarinLemus.pdf" download="CV_GustavoMarinLemus.pdf" className={styles.btnDownload}>
                        <button className={styles.btnDownload}>Descargar CV</button>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home