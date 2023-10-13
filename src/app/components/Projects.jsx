import React from 'react'
import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link'
const Projects = () => {
  return (
    <section className={styles.proyects} id='projects'>
      <h2 className={styles.title}>Mis Ultimos Proyectos</h2>
      <div className={styles.works}>
        <Link href="https://www.naayaritours.com/" target='blank'>
          <figure className={styles.card}>
            <Image className={styles.workImage}
              src="/assets/NaayariTours.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className={styles.cap}>
              <h3 className={styles.nameProyect}>Sitio Web Naayari Tours</h3>
              <p className={styles.desc}>
                Desarrollamos un sitio web para Naayari Tours dedicado a la gestión de reservas de viajes para sus clientes.
              </p>
            </div>
          </figure>
        </Link>

      </div>
    </section>
  )
}

export default Projects