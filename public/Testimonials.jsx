"use client"
import React, { useState } from 'react'
import Styles from '../styles/Testimonials.module.css'
import { testimonialsData } from '../data/testimonialsData'
import Image from 'next/image'
import { motion } from "framer-motion";

const Testimonails = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className={Styles.container} id='testimonials'>
      <motion.h2 className={Styles.testi}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>Testimonials
      </motion.h2>
      <div className={Styles.subBox}>
        <motion.div className={Styles.info}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className={Styles.stroke}>WHAT THEY<br /><span className={Styles.about}>SAY ABOUT ME</span></h3>
          <p className={Styles.review}>{testimonialsData[selected].review}</p>
          <p className={Styles.status}>{testimonialsData[selected].status}</p>
        </motion.div>
        <motion.div className={Styles.border}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
        >
          <Image className={Styles.profileImage}
            src={testimonialsData[selected].image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className={Styles.buttons}>
            <div className={Styles.btnLeft} onClick={() => {
              selected === tLength - 1 ? setSelected(0) :
                setSelected((prev) => prev + 1)
            }}>
              <Image className={Styles.image}
                src='/assets/leftArrow.png'
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className={Styles.btnRight} onClick={() => {
              selected === 0 ? setSelected(tLength - 1) :
                setSelected((prev) => prev - 1)
            }}>
              <Image className={Styles.image}
                src='/assets/rightArrow.png'
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonails