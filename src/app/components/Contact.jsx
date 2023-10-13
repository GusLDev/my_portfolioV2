"use client"
import React, { useRef } from 'react';
import styles from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vrycw3j','template_ktm8lyh', form.current, '_Fe0fwVajImJXN9Kf')
          .then ((result) => {
              console.log(result.text);
                form.current.reset()
              alert("Correo enviado")
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className={styles.contact} id='contact'>
            <h2 className={styles.title}>¡ENVIAME UN CORREO!</h2>
            <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
                <div className={styles.row}>
                    <input type="text" placeholder='Nombre Completo' className={styles.input} name='full_name' required/>
                    <input type="email" placeholder='Correo' className={styles.input} name='email_address' required/>
                </div>
                <div className={styles.row}>
                    <input type="tel" placeholder='Teléfono' className={styles.input} name='mobile_number' required/>
                    <input type="text" placeholder='Asunto' className={styles.input} name='email_subject' required/>
                </div>
                <div className={styles.row}>
                    <textarea  placeholder='Escribe tu mensaje' className={styles.message} name='message' required></textarea>
                </div>
                <button type="submit" className={styles.btnSend}>Send Message</button>
            </form>
        </section>
    )
}

export default Contact