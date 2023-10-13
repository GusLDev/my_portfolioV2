"use client"; // This is a client component 
import React, { useState } from 'react'
import styles from '../styles/Testimonials.module.css';
import Image from 'next/image';
import { TestimonialsData } from '../data/TestimonialsData';
import Link from 'next/link'

const Testimonials = () => {

  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;

  return (
    <section className={styles.testimonials} id='testimonials'>
      <h2 className={styles.title}>Testimonios</h2>
      <div className={styles.testimonial}>
        <div className={styles.info}>
          <h3 className={styles.subitle}>¿QUE DICEN<br className={styles.spaceStyle}/><span className={styles.about}> ACERCA DE MI?</span></h3>
          <p className={styles.review}>{TestimonialsData[selected].review}</p>
          <p className={styles.status}>{TestimonialsData[selected].status}</p>
        </div>
        <div className={styles.authorContainer}>
          <Link href={TestimonialsData[selected].linkedin} target='blank'>
            <Image className={styles.profileImage}
              src={TestimonialsData[selected].image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Link>
          <p className={styles.authorName}>{TestimonialsData[selected].name}</p>
          <div className={styles.btnContainer}>
            <div className={styles.btnLeft} onClick={() => {
              selected === tLength - 1 ? setSelected(0) :
                setSelected((prev) => prev + 1)
            }}>
              <Image className={styles.image}
                src='/assets/leftArrow.png'
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.btnRight} onClick={() => {
              selected === 0 ? setSelected(tLength - 1) :
                setSelected((prev) => prev - 1)
            }}>
              <Image className={styles.image}
                src='/assets/rightArrow.png'
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials